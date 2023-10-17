import { useEffect } from "react";

type JupyterNotebookProps = {
  src: string;
};

// Jupyter notebook iframe with custom styling
const JupyterNotebook = ({ src }: JupyterNotebookProps) => {
  useEffect(() => {
    const iframe: HTMLIFrameElement | null = document.getElementById(
      "jupyter-notebook"
    ) as HTMLIFrameElement;

    if (iframe) {
      iframe.onload = () => {
        const iframeDocument: Document | null = iframe.contentDocument;

        if (iframeDocument) {
          const customStyles = document.createElement("style");
          // customStyles.innerHTML = `.jpNotebook {color: red;}`;
          customStyles.innerHTML = `
          body.jp-Notebook {
            background-color: black;
          }
          h1, h2, h3, h4, h5, h6, p, ul, ol {
            color: white;
          }
          a {
            color: violet !important;
          }
          code {
            color: orange !important;
            background-color: black !important;
          }
          pre {
            background-color: whitesmoke;
          }
          `;
          iframeDocument.head.appendChild(customStyles);
        }
      };
    }

    console.log("styles updated");
  }, []);

  return (
    <iframe src={src} className="flex-fill" id="jupyter-notebook"></iframe>
  );
};

export default JupyterNotebook;
