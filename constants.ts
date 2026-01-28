
import { Conference, Category, Feature } from './types';

export const CONFERENCES: Conference[] = [
  {
    id: 'eje-este',
    name: 'EJE ESTE',
    clubsCount: 12,
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop',
    locations: ['La Victoria', 'El Consejo', 'Tejerías', 'La Colonia']
  },
  {
    id: 'eje-oeste',
    name: 'EJE OESTE',
    clubsCount: 14,
    imageUrl: 'https://images.unsplash.com/photo-1519861531473-9200362f46b3?q=80&w=2071&auto=format&fit=crop',
    locations: ['San Mateo', 'Equipos Invitados']
  }
];

export const CATEGORIES: Category[] = [
  { id: 'mini', label: 'MASCULINO Y FEMENINO', title: 'Mini' },
  { id: 'u13', label: 'MASCULINO Y FEMENINO', title: 'U-13' },
  { id: 'u14', label: 'MASCULINO Y FEMENINO', title: 'U-14' },
  { id: 'u15', label: 'MASCULINO Y FEMENINO', title: 'U-15' },
  { id: 'u16', label: 'MASCULINO Y FEMENINO', title: 'U-16' },
  { id: 'u17', label: 'MASCULINO Y FEMENINO', title: 'U-17' },
  { id: 'u18', label: 'MASCULINO Y FEMENINO', title: 'U-18' },
  { id: 'u19', label: 'MASCULINO Y FEMENINO', title: 'U-19' },
  { id: 'libre', label: 'MASCULINO Y FEMENINO', title: 'Libre', isMain: true },
  { id: 'master', label: 'MASCULINO Y FEMENINO', title: 'Master' },
  { id: 'interindustrial', label: 'MASCULINO Y FEMENINO', title: 'Interindustrial' },
  { id: 'escolar', label: 'MASCULINO Y FEMENINO', title: 'Escolar' }
];

export const FEATURES: Feature[] = [
  {
    id: 'coverage',
    icon: 'podcasts',
    title: 'Cobertura Digital',
    description: 'Transmisión en vivo por YouTube y TikTok con narración profesional de todos los encuentros.'
  },
  {
    id: 'refereeing',
    icon: 'sports',
    title: 'Arbitraje Federado',
    description: 'Garantía de imparcialidad con árbitros capacitados bajo normativa FIBA vigente.'
  },
  {
    id: 'accreditation',
    icon: 'verified',
    title: 'Aval Oficial',
    description: 'Reconocimiento por la Asociación de Baloncesto del Estado Aragua (ABAE).'
  }
];
