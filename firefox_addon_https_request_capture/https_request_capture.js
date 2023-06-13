function interceptFormData(requestDetails) {
    if (requestDetails.method === "POST" && requestDetails.requestBody && requestDetails.requestBody.formData) {
        const formData = requestDetails.requestBody.formData;
        console.log("Form Data:", formData);
        // Perform further processing or manipulation of the form data as needed
    }
}

browser.webRequest.onBeforeRequest.addListener(interceptFormData, {urls: ["<all_urls>"], types: ["main_frame"]}, ["requestBody"]);
