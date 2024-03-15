function status(request, response) {
  response.status(200).json({ chave: "valor é" });
}

export default status;
