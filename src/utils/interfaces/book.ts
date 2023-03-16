export interface Book {
    id: string;
    public: true;
    author: string;
    resume: string;
    title: string;
    subtitle: string;
    image: string;
    url: string;
    category: number[];
    userRegister: string;
    isHovered?: boolean;
}
