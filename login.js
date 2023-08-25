function a(event) {
  event.preventDefault();
  var us = document.getElementById("us").value;
  var ps = document.getElementById("ps").value;

  if (us === 'SaiAnvesh' && ps === '231') {
    // URL of the PDF file
    const pdfUrl = "CME1styearAudisankaraStudentsList.pdf";

    // Fetch the PDF document
    const loadingTask = pdfjsLib.getDocument(pdfUrl);

    // Rendering the PDF
    loadingTask.promise.then(pdf => {
      const numPages = pdf.numPages;
      const scale = 1.5; // Adjust as needed

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        pdf.getPage(pageNum).then(page => {
          // Set the canvas
          const canvas = document.createElement('canvas');
          canvas.className = 'pdf-page';
          document.getElementById('pdfViewer').appendChild(canvas);

          const context = canvas.getContext('2d');
          const viewport = page.getViewport({ scale });

          // Set canvas dimensions to match PDF
          canvas.width = viewport.width;
          canvas.height = viewport.height;

          // Render the PDF page into the canvas
          const renderContext = {
            canvasContext: context,
            viewport: viewport
          };
          page.render(renderContext);
        });
      }
    }).catch(error => {
      console.error("Error loading PDF:", error);
      alert("Failed to load PDF. Please try again later.");
    });
  } else {
    alert("Invalid Credentials");
  }
}
