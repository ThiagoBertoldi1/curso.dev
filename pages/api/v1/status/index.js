function status(request, response) {
  response.status(200).json({ teste: "Teste" });
}

export default status;
