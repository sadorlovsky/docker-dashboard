import got from 'got'

function getContainerList () {
  return got('http://unix:/var/run/docker.sock:/containers/json?all=true')
    .then(response => JSON.parse(response.body))
    .then(data => data.map(container => {
      return {
        id: container.Id,
        name: container.Names[0],
        image: container.Image
      }
    }))
}

function getContainer (id) {
  return got(`http://unix:/var/run/docker.sock:/containers/${id}/json`)
  .then(response => JSON.parse(response.body))
  .then(container => {
    return {
      id: container.Id,
      name: container.Name,
      image: container.Image
    }
  })
}

export default {
  getContainer,
  getContainerList
}
