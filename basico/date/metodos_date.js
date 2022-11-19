/* Construtor date

Retorna a data que o objeto foi instanciado baseado nos segundos passados
a partir de 01/01/1970 (Epoch).
*/
const data = new Date()
console.log(data)

/* Métodos get: getDay(), getDate(), getMonth, getTime(), getHours(),
getMinutes, getSeconds(), getFullYear()
*/

// Extrae as informações básicas da data:
console.log('Data:', data.getDate())
console.log('Dia:', data.getDay())
console.log('Mês:', data.getMonth())
console.log('Tempo:', data.getTime())
console.log('Horas:', data.getHours())
console.log('Minutos:', data.getMinutes())
console.log('Segundos:', data.getSeconds())
console.log('Ano:', data.getFullYear())

// Extrae as mesmas informações só que no timezone UTC:

console.log('Data:', data.getUTCDate())
console.log('Dia:', data.getUTCDay())
console.log('Mês:', data.getUTCMonth())
console.log('Horas:', data.getUTCHours())
console.log('Minutos:', data.getUTCMinutes())
console.log('Segundos:', data.getUTCSeconds())
console.log('Ano:', data.getUTCFullYear())

// Retorna a diferença de horas entre o tempo local e UTC (em minutos):
console.log(data.getTimezoneOffset())

/* Métodos set: setDate, setHours, setFullYear...
 */
data.setDate(3)
data.setMonth(0, 9)
data.setHours(20)
data.setFullYear(2002)

console.log('Data:', data.getDate())
console.log('Mês:', data.getMonth())
console.log('Ano:', data.getFullYear())
console.log('Horas:', data.getHours())

/* Métodos toString(), toDateString(), toISOString(), toLocaleString(), toTimeString(),
toUTCString, UTC() e valueOf().
*/
console.log('toString():', data.toString())
console.log('toISOString():', data.toISOString())
console.log('toLocaleString():', data.toLocaleString())
console.log(
    'toLocaleString() formatado:',
    data.toLocaleString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    })
)
console.log('toTimeString():', data.toTimeString())
console.log('UTC():', Date.UTC(2002, 0, 9))
console.log('valueOf():', data.valueOf())
