// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const paths = [
    { params: { site: "quintyss1" } },
    { params: { site: "quintyss2" } },
    { params: { site: "quintyss3" } },
  ]

  const quyntiss1 = {
    domain: "quintyss1",
    data: {
      id: 30998,
      template: 'template1',
      langs: [
        {
          default: true,
          iso: 'fr',
          name: 'français',
        },
        {
          default: false,
          iso: 'en',
          name: 'english',
        },
      ],
    }
  }

  const quyntiss2 = {
    domain: "quintyss2",
    data: {
      id: 90897,
      template: 'template2',
      langs: [
        {
          default: true,
          iso: 'fr',
          name: 'français',
        },
        {
          default: false,
          iso: 'es',
          name: 'spanish',
        },
      ],
    }
  }

  const quyntiss3 = {
    domain: "quintyss3",
    data: {
      id: 28768289,
      template: 'template22',
      langs: [
        {
          default: true,
          iso: 'en',
          name: 'english',
        },
        {
          default: false,
          iso: 'fr',
          name: 'français',
        },
      ],
    }
  }

  // RETURN JSON
  res.status(200).json({
    paths,
    data: [
      quyntiss1,
      quyntiss2,
      quyntiss3,
    ]
  })
}
