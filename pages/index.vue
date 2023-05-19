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

    <LazyPopupPdfViewer
      :show="showPopupPdfViewerFullScreen"
      title="Your PDF Here"
      :pdf-link="linkPdf"
      @hide-popup-pdf-viewer="showPopupPdfViewerFullScreen = false"
    />
  </div>
</template>

<script setup lang="ts">
const linkPdf = ref("https://pdf-viewer-wise.vercel.app/1658932805662.pdf");

const showPopupPdfViewerFullScreen = ref(false);
</script>
