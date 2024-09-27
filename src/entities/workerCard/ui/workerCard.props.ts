export interface WorkerCardProps {
    id: number;
    name: string;
    photo: string;
    description: string;
    education: string;
    onModalOpen: (id: string) => void;
}