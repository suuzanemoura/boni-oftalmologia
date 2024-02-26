export const instagramSectionConfig = {
  title: "Me siga no meu perfil ",
  title_highlight: "@drpedroboni!",
  subtitle: "Instagram",
  instagram_url: "https://www.instagram.com/drpedroboni/",
  token: process.env.INSTAGRAM_TEST_TOKEN,
  url_instagram_api: `${process.env.NEXT_PUBLIC_INSTAGRAM_API}?fields=id,media_type,media_url,caption,permalink,username&access_token=${process.env.INSTAGRAM_TEST_TOKEN}`,
  alert_error_api: {
    title:
      "Atenção! Informações do feed do Instagram do Dr. Pedro Boni não foram foram carregados:",
    info_list: [
      "Por favor, verifique sua conexão com a intenet.",
      "Depois recarregue a página e tente novamente.",
    ],
  },
  alert_error_notFound: {
    title: "Feed não encontrado:",
    info_list: [
      "Não foram encontrados publicações associados ao Instagram solicitado.",
      "Por favor, verifique sua conexão com a intenet.",
      "Depois recarregue a página e tente novamente.",
    ],
  },
};
