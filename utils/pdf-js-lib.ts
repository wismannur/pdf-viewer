const linkCDNPdfWorker =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js";

export const pdfjsState = ref({} as any);

export const initPdfjsLib = async (linkPdf: string) => {
  const w = window as any;
  const pdf: any = w.pdfjsLib;
  pdf.GlobalWorkerOptions.workerSrc = linkCDNPdfWorker;
  const loadingTask = pdf.getDocument(linkPdf);
  await loadingTask.promise
    .then((pdf: any) => {
      pdfjsState.value = pdf;
    })
    .catch((err: any) => {
      console.error("err fetch pdf ", err);
    });
};
