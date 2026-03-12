/*Atividade 4 - Escada de hashtags
Use for para exibir o padrão abaixo no console:
#
##
###
####
##### */

let hashtag = ``
for (i= 0; i <= 10; i++ ){
    console.log(hashtag += `#`)
}

let hash = ``
for (i= 10; i >= 0; i-- ){
    console.log(hash)
    hash = hash.slice(0, -1)
}


