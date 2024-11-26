export default function EditProfile(){
    return(
        <form className="form" id="form-profile">
                <input type="text" name="name" minLength="2" maxLength="40" className="form__input" id="name" required />
                <span className="form__input-error" id="name-error"></span>
                <input type="text" name="about" minLength="2" maxLength="200" className="form__input" id="aboutme" required />
                <span className="form__input-error" id="aboutme-error"></span>
                <button className="form__submit" type="submit">Guardar</button>
            </form>
    )
}