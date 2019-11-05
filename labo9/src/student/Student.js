class Student {
    constructor(carnet, horario, tarde) {
        this._carnet = carnet;
        this._horario = horario;
        this._tarde = tarde;
    }

    get carnet() { return this._carnet }
    get horario() { return this._horario }
    get tarde() { return this._tarde }

    set carnet(carnet) { this._carnet = carnet }
    set horario(horario) { this._horario = horario }
    set tarde(tarde) { this._tarde = tarde }
}

export default Student;
