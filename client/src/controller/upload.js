import axios from "axios";

const uploadImage = (img) => {
    let body = new FormData()
    body.set('key', 'e8a90d5e85dc1d2e22d8e25498b2315b')
    body.append('image', img)

    return axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body
    })
}


export default uploadImage;
