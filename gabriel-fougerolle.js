const name = "jean-dupont"
const promo = "B2A"

const q1 = `
select TrackId,Name, Milliseconds
from Track
where Milliseconds <= (select Milliseconds from Track where TrackId LIKE 3457);
`

const q2 = `
select T.Name, M.Name
from Track T, MediaType M
where M.MediaTypeId = (select MediaTypeId from Track where Name like 'Rehab');
`
const q3 = ``
const q4 = ``
const q5 = ``
const q6 = ``
const q7 = ``
const q8 = ``
const q9 = ``
const q10 = `oui`
const q11 = ``
const q12 = ``
const q13 = ``
const q14 = ``
const q15 = `oui`
const q16 = ``
const q17 = `oui`
const q18 = ``
const q19 = ``
const q20 = ``
const q21 = ``
const q22 = ``
const q23 = ``
const q24 = ``
const q25 = ``
const q26 = ``











































// NE PAS TOUCHER CETTE SECTION
const tp = {name: name, promo: promo, queries: [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26]}
module.exports = tp
