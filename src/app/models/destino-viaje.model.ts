export class DestinoViaje {
    nombre: string;
    imagenUrl: string;
    private selected: boolean;
    constructor(n: string, u: string) {
        this.nombre = n;
        this.imagenUrl = u;
    }
    isSelected(): boolean {
        return this.selected;
    }
    setSelected() {
        this.selected = true;
    }
}