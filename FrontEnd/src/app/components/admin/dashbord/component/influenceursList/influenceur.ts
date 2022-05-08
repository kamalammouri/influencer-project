export interface Influenceur {
  id: number,
  email:string,
  nom: string,
  prenom: string,
  date_naissance: Date,
  telephone:number,
  profession:string,
  genre: string,
  situation_familiale: string,
  niveau_etude: string,
  langue: string,
  instagram:instagram_infos,
  youtube: string,
  facebook: string,
  tiktok: string,
  adresse:adresse_infos
}

export interface instagram_infos {
  username: string,
  bio: string,
  followers: number,
  following: number,
  full_name: string,
  category_name: string,
  profile_pic_url_proxy: string,
  posts_count: number
}

export interface adresse_infos {
  quartier: string,
  postCode: number,
  ville: string
}

