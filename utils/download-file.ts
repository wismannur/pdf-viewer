export const downloadFileFromFetch = (fileUrl: string) => {
  const fileUrlSplitted = fileUrl.split("/");
  const fileName = fileUrlSplitted[fileUrlSplitted.length - 1];

  fetch(fileUrl).then((t: any) => {
    return t.blob().then((b: any) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(b);
      a.setAttribute("download", fileName);
      a.click();
    });
  });
};
