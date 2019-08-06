import Typography from "typography"

const typography = new Typography({
    baseFont: "18px;",
    bodyFontFamily: ["Red Hat Text", "serif"],
    googleFonts: [
        {
            name: "Montserrat",
            styles: [ "700", "500" ]
        },
        {
            name: "Raleway",
            styles: [ "700", "500" ]
        },
        {
            name: "Red Hat Text",
            styles: [ "400", "500", "700" ]
        },
        {
            name: "Quicksand",
            styles: [ "400", "500", "700" ]
        }
    ]
})

export default typography
