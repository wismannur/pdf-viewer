import type { Ref } from "nuxt/dist/app/compat/capi";

type Options = {
  debounce: number;
};

type PdfJS = (
  pdfLink: string,
  options?: Options
) => {
  data: Ref<any | null>;
  pending: Ref<boolean>;
  execute: () => Promise<void>;
  error: Ref<any | null>;
  reset: () => void;
};

/**
 * @param handler is function / async function
 * @param options so-far only "debounce" with type number
 * @returns
 *   data: Ref<any | null> ,
 *   pending: Ref<boolean> ,
 *   execute: () => Promise<void> ,
 *   error: Ref<any | null> ,
 *   reset: () => void ,
 */
const usePdfJS: PdfJS = (pdfLink, options) => {
  const fetchData = ref(null as null | unknown);
  const fetchPending = ref(false);
  const fetchError = ref(null);
  let callId = 0;

  const getPdf = async () => {
    const linkCDNPdfWorker =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js";

    const w = window as any;
    const pdfjsLib: any = w.pdfjsLib;
    pdfjsLib.GlobalWorkerOptions.workerSrc = linkCDNPdfWorker;
    const loadingTask = pdfjsLib.getDocument({
      url: pdfLink,
    });

    return loadingTask;
  };

  const execute = async () => {
    callId += 1;
    const currCallId = callId;

    fetchPending.value = true;

    await new Promise((resolve) => setTimeout(resolve, options?.debounce || 0));

    // Another fetch invocation has already been made.
    // This call is stale, we should not continue.
    if (currCallId !== callId) {
      return;
    }

    try {
      fetchData.value = await getPdf();
      fetchError.value = null;
    } catch (err: any) {
      fetchError.value = err;
      fetchData.value = null;
    } finally {
      fetchPending.value = false;
    }
  };

  const fetchReset = () => {
    fetchData.value = null;
    fetchPending.value = false;
    fetchError.value = null;
    callId = 0;
  };

  return {
    data: fetchData,
    pending: fetchPending,
    execute,
    error: fetchError,
    reset: fetchReset,
  };
};

export default usePdfJS;
