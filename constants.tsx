
import { EventType, Testimonial, GalleryItem } from './types';

export const BRAND_NAME = "AURUM VENUES";

export const EVENT_CATEGORIES: EventType[] = [
  {
    id: 'casamentos',
    title: 'Casamentos Inesquecíveis',
    subtitle: 'Crie o seu conto de fadas.',
    description: 'A sofisticação encontra a emoção em nosso salão principal. Oferecemos o cenário perfeito para que o "sim" seja apenas o começo de uma jornada extraordinária.',
    image: 'https://picsum.photos/id/101/800/600',
    benefits: ['Cerimonial integrado', 'Suíte da noiva exclusiva', 'Catering de alta gastronomia', 'Arquitetura clássica e suntuosa'],
    cta: 'Realizar Meu Sonho'
  },
  {
    id: 'noivados',
    title: 'Noivados Românticos',
    subtitle: 'Celebrações íntimas e personalizadas.',
    description: 'O momento em que duas vidas decidem se tornar uma merece uma atmosfera mágica. Ambientes modulares para jantares íntimos ou festas vibrantes.',
    image: 'https://picsum.photos/id/22/800/600',
    benefits: ['Espaços flexíveis', 'Decoração floral personalizada', 'Ambiente climatizado', 'Iluminação cênica'],
    cta: 'Solicitar Orçamento'
  },
  {
    id: 'corporativos',
    title: 'Eventos Corporativos de Elite',
    subtitle: 'Impressione em grande estilo.',
    description: 'Infraestrutura tecnológica de ponta combinada com um ambiente que exala credibilidade e profissionalismo para conferências, premiações e networking.',
    image: 'https://picsum.photos/id/3/800/600',
    benefits: ['Som e vídeo 4K', 'Fibra ótica de alta velocidade', 'Business Lounge', 'Serviço de Coffee Break Premium'],
    cta: 'Agendar Visita Corporativa'
  },
  {
    id: 'privados',
    title: 'Eventos Privados Exclusivos',
    subtitle: 'Sua celebração, suas regras.',
    description: 'Aniversários, bodas ou jantares de gala. Nossa versatilidade permite transformar qualquer ideia em uma experiência memorável e totalmente exclusiva.',
    image: 'https://picsum.photos/id/102/800/600',
    benefits: ['Total privacidade', 'Bar de coquetéis artesanais', 'Segurança privada', 'Acesso VIP'],
    cta: 'Personalizar Meu Evento'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Mariana & Lucas",
    role: "Casamento - Outubro 2023",
    content: "O Aurum Venues superou todas as nossas expectativas. A atenção aos detalhes e o suporte da equipe transformaram nosso casamento em um sonho real.",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    name: "Roberto Silva",
    role: "CEO da TechGlobal",
    content: "Realizamos nosso evento anual de premiação e a infraestrutura tecnológica é impecável. O catering foi o ponto alto do networking.",
    image: "https://picsum.photos/id/91/100/100"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, url: 'https://picsum.photos/id/201/400/500', category: 'Casamentos', title: 'Salão Principal' },
  { id: 2, url: 'https://picsum.photos/id/202/400/300', category: 'Catering', title: 'Gastronomia Aurum' },
  { id: 3, url: 'https://picsum.photos/id/203/400/600', category: 'Corporativo', title: 'Auditório Alpha' },
  { id: 4, url: 'https://picsum.photos/id/204/400/400', category: 'Decoração', title: 'Arranjos Florais' },
];
