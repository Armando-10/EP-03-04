export interface SesionResponseDto {
  id: string;
  tutorId: string;
  titulo: string;
  descripcion: string;
  fechaHora: string;
  cupoMaximo: number;
  cupoDisponible: number;
  creadoEn: string;
}
