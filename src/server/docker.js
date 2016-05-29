import got from 'got'

export function getContainerList () {
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
