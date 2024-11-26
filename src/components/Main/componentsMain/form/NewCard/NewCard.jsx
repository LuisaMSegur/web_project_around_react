export default function NewCard(){
    return(
        <form className="form" id="form-card">
                <input type="text" name="title" minLength="2" maxLength="40" placeholder="Titulo" className="form__input"
                    id="input-place" />
                <span className="form__input-error" id="input-place-error"></span>

                <input type="url" name="link" placeholder="Enlace a la imagen" className="form__input" id="input-image"
                    required />
                <span className="form__input-error" id="input-image-error"></span>

                <button className="form__submit" type="submit">Crear</button>
                <p className="form__loading">Cargando...</p>
            </form>
    )
}