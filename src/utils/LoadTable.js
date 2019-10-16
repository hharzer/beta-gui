import cheerio from 'cheerio'
import table2json from 'table2json'
import _ from 'lodash'


const composeTable = (table) =>{
    console.log(table)
    const rowHeaderCount = _.size(table[0])
    const rowTypes = _.groupBy(table, _.size)
    const fullRows = rowTypes[rowHeaderCount]
    const commentRows = rowTypes["3"]
    console.log(rowTypes)
    const finalRows = []//rowTypes["3"].map(rowy=>_.create({"comment":_.result(rowy,"Type")}))
    //merge for each row!
    for (let i = 0; i < _.size(rowTypes[rowHeaderCount]); i++) {
        finalRows[i] = {...fullRows[i], "comment":commentRows[i]["Type"]}
    }

    return finalRows
}

export const HtmlToJson = (html) =>{
    
    const htmlFile = cheerio.load(html)
	const htmlOBJ = document.createElement("table")
	htmlOBJ.innerHTML = htmlFile("#closed-position").html()
    let tableData = table2json.parse(htmlOBJ)
    tableData = composeTable(tableData)
    return tableData
}
