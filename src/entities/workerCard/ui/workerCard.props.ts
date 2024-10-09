export interface WorkerCardProps {
    id: number;
    name: string;
    photo: string;
    description: string;
    education: HTMLImageElement;
    onModalOpen: (id: {}) => void;
}