/**
 * ============================================================
 * DADOS DA CLÍNICA — Dra. Michelly Salles Medicina Estética
 * Demo personalizado a partir de clinproto (molde intacto)
 * ============================================================
 */

export const clinic = {
  name: 'Dra. Michelly Salles Medicina Estética',
  tagline: 'Estética médica com critério e leveza',
  shortDescription:
    'Medicina estética em Água Verde, Curitiba — botox, preenchimentos, bioestimuladores, fios, peelings e skinboosters, com agendamento pelo WhatsApp.',

  hero: {
    eyebrow: 'Água Verde · Curitiba',
    titleLead: 'Beleza natural,',
    titleAccent: 'com precisão médica',
    titleTail: '',
    lead: 'Protocolos faciais com CRM e escuta atenta. Ambiente boutique na República Argentina — tire dúvidas e agende pelo WhatsApp.',
    imageAlt: 'Consulta de medicina estética em consultório acolhedor',
  },

  manifesto: {
    lead: 'Nós acreditamos que',
    statement: 'estética boa respeita a anatomia — e a sua história.',
    body: 'Menos exagero, mais harmonia. Avaliação franca, indicação clara e acompanhamento próximo, no ritmo da Água Verde.',
  },

  whatsapp: '5541997686667',
  whatsappDefaultMessage:
    'Olá! Gostaria de agendar uma avaliação com a Dra. Michelly Salles.',

  phone: '(41) 99768-6667',
  email: 'contato@dramichellysalles.com.br',

  address: {
    street: 'Av. República Argentina, 1228 — Sala 2708',
    neighborhood: 'Água Verde',
    city: 'Curitiba',
    state: 'PR',
    zip: '',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Av.+Rep%C3%BAblica+Argentina+1228+Curitiba+PR&output=embed',
  },

  hours: [
    { days: 'Segunda a Sexta', time: 'Consultar disponibilidade' },
    { days: 'Sábado', time: 'Sob agendamento' },
    { days: 'Domingo', time: 'Fechado' },
  ],

  insurance: ['Particular'],

  stats: [
    { value: 1, suffix: '', label: 'CRM-PR 16778' },
    { value: 100, suffix: '%', label: 'Atendimento particular' },
    { value: 1, suffix: '', label: 'Consultório Água Verde' },
    { value: 1, suffix: '', label: 'WhatsApp para agendar' },
  ],

  highlights: [
    {
      id: 'criterio',
      title: 'Critério médico',
      description: 'Indicação baseada em anatomia e segurança — sem protocolar o que não cabe.',
      icon: 'stethoscope',
    },
    {
      id: 'natural',
      title: 'Resultado natural',
      description: 'Harmonização sutil: você parece descansada, não “feita”.',
      icon: 'sparkle',
    },
    {
      id: 'whats',
      title: 'WhatsApp direto',
      description: 'Tire dúvidas e agende no canal que você já usa.',
      icon: 'clock',
    },
    {
      id: 'local',
      title: 'Água Verde',
      description: 'Consultório na República Argentina — fácil acesso.',
      icon: 'users',
    },
  ],

  social: {
    instagram: 'https://www.instagram.com/dramichellysalles/',
    facebook: null,
    youtube: null,
  },

  legal: {
    cnes: '—',
    cnpj: '—',
    razaoSocial: 'Dra. Michelly Salles Medicina Estética',
  },
}
