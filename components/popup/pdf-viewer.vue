<template>
  <ClientOnly>
    <v-dialog
      v-model="props.show"
      width="1024"
      transition="dialog-bottom-transition"
    >
      <div
        id="my_pdf_viewer"
        class="tw-w-full tw-relative tw-flex tw-flex-col tw-overflow-hidden tw-p-3 xl:tw-p-5 tw-bg-gray-100 tw-rounded-lg"
      >
        <div class="tw-flex tw-flex-row tw-items-start tw-mb-3 xl:tw-mb-5">
          <h5
            class="tw-text-gray-600 tw-text-base tw-font-semibold xl:tw-text-xl tw-line-clamp-2 tw-pr-5"
            v-html="title"
          />
          <div
            class="tw-ml-auto tw-cursor-pointer"
            @click="emit('hidePopupPdfViewer')"
          >
            <v-icon>mdi-close</v-icon>
          </div>
        </div>

        <LoadingCircularDiv
          v-if="loadedPdf && !linkPdfIsError"
          message="Loading, Sedang memuat dokumen..."
          class="tw-mx-auto tw-my-5"
        />

        <div v-if="!loadedPdf && !linkPdfIsError" class="tw-w-full">
          <!-- canvas for render pdf -->
          <div
            id="pdf-body"
            class="tw-w-full tw-text-center tw-overflow-auto tw-relative tw-h-[calc(100vh-247px)] xl:tw-h-auto xl:tw-max-h-[calc(100vh-250px)]"
          >
            <canvas
              id="pdf-viewer-full-screen-renderer"
              class="tw-m-auto"
              :style="{
                width: styleCanvas.width,
                height: styleCanvas.height,
              }"
            />
          </div>

          <!-- controls pdf -->
          <div
            class="tw-flex tw-flex-col xl:tw-flex-row tw-items-center tw-mt-3 xl:tw-mt-5"
          >
            <!-- controls for zoom-out or zoom-in page pdf -->
            <div
              id="zoom_controls"
              class="tw-flex tw-flex-row tw-mx-auto xl:tw-ml-0 xl:tw-mr-auto"
            >
              <LazyBtnOutlined label="Zoom In" @click="zoomIn" class="tw-mr-3">
                <template #append-icon>
                  <v-icon
                    class="tw-ml-2 xl:tw-ml-3 !tw-text-2xl !tw-text-sky-500"
                  >
                    mdi-magnify-plus-outline
                  </v-icon>
                </template>
              </LazyBtnOutlined>

              <LazyBtnOutlined label="Zoom Out" @click="zoomOut">
                <template #append-icon>
                  <v-icon
                    class="tw-ml-2 xl:tw-ml-3 !tw-text-2xl !tw-text-sky-500"
                  >
                    mdi-magnify-minus-outline
                  </v-icon>
                </template>
              </LazyBtnOutlined>
            </div>

            <!-- navigation for next or prev page pdf -->
            <div
              id="navigation_controls"
              class="tw-flex tw-flex-row tw-items-center tw-pr-1 tw-mx-auto xl:tw-mx-0 tw-mt-3 xl:tw-mt-0"
            >
              <span class="tw-inline-block tw-my-auto tw-mr-3">
                Halaman <b class="tw-mx-1">{{ pdfCurrentPage }}</b> dari Total
                <b class="tw-mx-1">{{ pdfPages }}</b> Halaman.
              </span>
              <LazyBtnOutlined
                id="go_previous"
                rounded="full"
                class="!tw-px-2 !tw-w-10 !tw-min-w-auto"
                @click="goPrev"
              >
                <template #prepend-icon>
                  <v-icon class="!tw-text-sky-500 !tw-text-2xl !tw-font-bold">
                    mdi-chevron-left
                  </v-icon>
                </template>
              </LazyBtnOutlined>
              <LazyBtnOutlined
                id="go_next"
                rounded="full"
                class="tw-ml-2 !tw-px-2 !tw-w-10 !tw-min-w-auto"
                @click="goNext"
              >
                <template #prepend-icon>
                  <v-icon class="!tw-text-sky-500 !tw-text-2xl !tw-font-bold">
                    mdi-chevron-right
                  </v-icon>
                </template>
              </LazyBtnOutlined>
            </div>
          </div>
        </div>

        <div v-if="linkPdfIsError" class="tw-m-auto">
          <h1 class="tw-text-red-500">
            your file pdf is wrong or fetch pdf is error
          </h1>
        </div>
      </div>
    </v-dialog>
  </ClientOnly>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js",
      async: true,
    },
  ],
});

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  pdfLink: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["hidePopupPdfViewer"]);

let pdfState: any = null;
const loadedPdf = ref(false);
const pdfCurrentPage = ref(1);
const pdfPages = ref(0);
const currentScaleZoom = ref(1);

const pdfOriginalSize = ref({
  width: 0,
  height: 0,
});
const styleCanvas = ref({
  width: "",
  height: "",
});

const renderPdf = () => {
  pdfState.getPage(pdfCurrentPage.value).then((page: any) => {
    const canvas = document.getElementById(
      "pdf-viewer-full-screen-renderer"
    ) as any;
    const ctx = canvas.getContext("2d");

    const viewport = page.getViewport(currentScaleZoom.value);
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    pdfOriginalSize.value.width = Number(viewport.width);
    pdfOriginalSize.value.height = Number(viewport.height);

    styleCanvas.value.width = `${viewport.width}px`;
    styleCanvas.value.height = `${viewport.height}px`;

    page.render({
      canvasContext: ctx,
      viewport: viewport,
    });
  });
};

const goPrev = () => {
  if (pdfState == null || pdfCurrentPage.value == 1) return;
  pdfCurrentPage.value -= 1;
  renderPdf();
};

const goNext = () => {
  if (pdfState == null || pdfCurrentPage.value === pdfPages.value) return;
  pdfCurrentPage.value += 1;
  renderPdf();
};

const zoomIn = () => {
  if (pdfState == null) return;

  currentScaleZoom.value += 0.1;
  renderPdf();
};

const zoomOut = () => {
  if (pdfState == null) return;

  currentScaleZoom.value -= 0.1;
  renderPdf();
};

const linkPdfIsError = ref(false);

const executePdfViewer = () => {
  loadedPdf.value = true;
  linkPdfIsError.value = false;

  const w = window as any;
  const pdfjsLib = w.pdfjsLib;
  pdfjsLib
    ?.getDocument(props.pdfLink)
    .then((pdf: any) => {
      pdfState = pdf;
      pdfCurrentPage.value = 1;
      pdfPages.value = pdf?.numPages || 0;
      renderPdf();

      // hide loading circular
      loadedPdf.value = false;
    })
    .catch((err: any) => {
      console.error("err fetch pdf ", err);
      linkPdfIsError.value = true;
    });
};

watch(
  () => props.show,
  (newValShow) => {
    console.log("pdf link ", props.pdfLink);

    if (newValShow) executePdfViewer();
  }
);
</script>
