/*
    The second form is there so 
    when users press outside the dialog
    the dialog gets dismissed
 */

import { AVAILABLE_THEMES } from "../../globals"


const handleChangeTheme = (newTheme) => {
    const mainBody = document.getElementById("main-body")
    mainBody.setAttribute("data-theme", newTheme)
    localStorage.setItem("data-theme", newTheme)
}

const RenderThemes = AVAILABLE_THEMES.map((item) => {
    return (
        <li style={{flexDirection: "row"}}>
            <a style={{flex: 1}} onClick={() => handleChangeTheme(item)}>
                {item}
                <div data-theme={item} style={{width: 10, height: 10}}/>
            </a>
        </li>
    )
})

export default function ThemePickerModal() {
    return (
        <dialog id="my_modal_2" className="modal">
            <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Themes</h3>
                <ul className="menu rounded-box">
                    {RenderThemes}
                </ul>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
