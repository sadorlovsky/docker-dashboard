import got from 'got'

function getContainerList () {
  return got('http://unix:/var/run/docker.sock:/containers/json?all=true')
    .then(response => JSON.parse(response.body))
    .then(data => data.map(container => {
      return {
        id: container.Id,
        name: container.Names[0].substring(1),
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
      name: container.Name.substring(1),
      image: container.Image,
      running: container.State.Running
    }
  })
}

function stopContainer (id) {
  return got.post(`http://unix:/var/run/docker.sock:/containers/${id}/stop`)
    .then(response => response.statusCode)
}

function startContainer (id) {
  return got.post(`http://unix:/var/run/docker.sock:/containers/${id}/start`)
    .then(response => response.statusCode)
}

export default {
  getContainer,
  getContainerList,
  stopContainer,
  startContainer
}
