function getConfig(req, res) {
  res.json({
    maintenance: false,
    maintenance_message: "El lanzador está en mantenimiento.<br>Por favor, inténtelo de nuevo más tarde.",
    online: true,
    client_id: "13f589e1-e2fc-443e-a68a-63b0092b8eeb",
    dataDirectory: "Pyro"
  })
}

function getNews(req, res) {
  res.json([
    {
      title: 'Test 1',
      content: 'esto es un test',
      author: 'ByJoako',
      publish_date: new Date()
    },
    {
      title: 'Test 2',
      content: 'Hola</br> Esto es un test',
      author: 'ByJoako',
      publish_date: new Date()
    }
  ])
}

export default { getConfig, getNews }