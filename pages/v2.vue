<template>
  <div
    id="home"
    class="tw-flex tw-flex-col tw-min-h-screen tw-h-full tw-w-full tw-bg-gray-200"
  >
    <div class="tw-container tw-mx-auto tw-my-10">
      <h1
        class="tw-text-center tw-mb-10 tw-text-2xl tw-font-semibold tw-text-gray-700"
      >
        PDF Viewer
      </h1>

      <LazyInputText
        v-model="linkPdf"
        label="Input Link PDF"
        required
        placeholder="Masukkan Link PDF"
        class-field="tw-mb-4"
      />

      <LazyBtnFilled
        label="Show PDF"
        color="sky"
        :disabled="!linkPdf"
        @click="showPopupPdfViewerFullScreen = true"
      >
      </LazyBtnFilled>
    </div>

    <div class="tw-container tw-mx-auto tw-my-10">
      <h1
        class="tw-text-center tw-mb-10 tw-text-2xl tw-font-semibold tw-text-gray-700"
      >
        PDF Viewer
      </h1>

      <LazyInputText
        v-model="linkPdfV2"
        label="Input Link PDF"
        required
        placeholder="Masukkan Link PDF"
        class-field="tw-mb-4"
      />

      <LazyBtnFilled
        label="Show PDF"
        color="sky"
        :disabled="!linkPdfV2"
        @click="showPopupPdfViewerFullScreenV2 = true"
      >
      </LazyBtnFilled>
    </div>

    <ClientOnly>
      <LazyPopupPdfViewerV2
        :show="showPopupPdfViewerFullScreen"
        title="Your PDF Here"
        :pdf-link="linkPdf"
        @hide-popup-pdf-viewer="showPopupPdfViewerFullScreen = false"
      />

      <LazyPopupPdfViewerV2
        :show="showPopupPdfViewerFullScreenV2"
        title="Your PDF Here"
        :pdf-link="linkPdfV2"
        @hide-popup-pdf-viewer="showPopupPdfViewerFullScreenV2 = false"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.min.js",
      async: true,
    },
  ],
});

const linkPdf = ref("https://pdf-viewer-wise.vercel.app/1658932805662.pdf");
const linkPdfV2 = ref("https://d30ouyomxdp4pq.cloudfront.net/programCertificate/certificate574791674437519895.pdf");
// https://d30ouyomxdp4pq.cloudfront.net/programCertificate/certificate574791674437519895.pdf

// Access-Control-Allow-Origin: *

const showPopupPdfViewerFullScreen = ref(false);
const showPopupPdfViewerFullScreenV2 = ref(false);
</script>
