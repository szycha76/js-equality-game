import latvian from "./translations/lv-LV.json"
import english from "./translations/en-US.json"
import dutch from "./translations/nl-NL.json"
import french from "./translations/fr-FR.json"
import german from "./translations/de-DE.json"

const translationData = new Map() //
  .set(`en-US`, { data: english, name: `English` })
  .set(`de-DE`, { data: german, name: `Deutsch` })
  .set(`fr-FR`, { data: french, name: `Français` })
  .set(`nl-NL`, { data: dutch, name: `Nederlands` })
  .set(`lv-LV`, { data: latvian, name: `Latviešu` })

export default translationData
