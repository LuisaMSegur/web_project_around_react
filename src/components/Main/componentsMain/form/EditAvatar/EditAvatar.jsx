export default function EditAvatar(){
    return(
        <form className="form" id="form-avatar">
                <input type="url" name="avatar" placeholder="Enlace de la imagen" className="form__input" id="input-image"
                    required />
                <span className="form__input-error" id="input-image-error"></span>
                <button className="form__submit" type="submit">Guardar</button>
                <p className="form__loading">Cargando...</p>
            </form>
    )
}