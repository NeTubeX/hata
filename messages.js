// ============================================
// MESSAGES - 25 VARIANTES PAR CATÉGORIE
// ============================================

export const MESSAGES = {
    
    // ==========================================
    // 1️⃣ NOTES - 25 variantes
    // ==========================================
    NOTES: [
        `{eleve} a eu {note}/{max} en {matiere} ({type} - {periode}).`,
        `La meilleure note de {eleve} est {note}/{max} en {matiere} ({type}).`,
        `En {matiere}, {eleve} a {note}/{max} ({type} de {periode}).`,
        `{eleve} a fait {note}/{max} en {matiere} ({periode}).`,
        `Note de {eleve} en {matiere} : {note}/{max} ({type}).`,
        `{eleve} a obtenu {note}/{max} en {matiere} ({periode}).`,
        `En {matiere}, {eleve} a eu {note}/{max} ({type}).`,
        `Résultat de {eleve} en {matiere} : {note}/{max} ({periode}).`,
        `{eleve} a marqué {note}/{max} en {matiere} ({type} - {periode}).`,
        `Note de {eleve} : {note}/{max} en {matiere} ({type} de {periode}).`,
        `{eleve} a {note}/{max} en {matiere} ({periode}).`,
        `En {matiere}, {eleve} a fait {note}/{max} ({type}).`,
        `{eleve} a eu {note} points sur {max} en {matiere}.`,
        `Résultat en {matiere} pour {eleve} : {note}/{max} ({periode}).`,
        `{eleve} a obtenu {note}/{max} ({type} - {periode}) en {matiere}.`,
        `Note de {eleve} en {matiere} ({type}) : {note}/{max}.`,
        `En {periode}, {eleve} a eu {note}/{max} en {matiere}.`,
        `{eleve} a fait {note}/{max} en {matiere} ({type}).`,
        `{matiere} : {eleve} a eu {note}/{max} ({periode}).`,
        `{eleve} a eu {note}/{max} en {matiere} ({type} de {periode}).`,
        `Note en {matiere} de {eleve} : {note}/{max} ({type}).`,
        `{eleve} a marqué {note}/{max} en {matiere} ({periode}).`,
        `En {matiere}, {eleve} a obtenu {note}/{max} ({type}).`,
        `{eleve} a fait {note}/{max} en {matiere} ({type} - {periode}).`,
        `Résultat de {eleve} : {note}/{max} en {matiere} ({periode}).`
    ],
    
    // ==========================================
    // 2️⃣ FRAIS - 25 variantes
    // ==========================================
    FRAIS: [
        `Frais de {eleve} : {minerval} FC/mois. Payé : {paye} FC. Reste : {reste} FC. {statut}`,
        `Pour {eleve}, minerval : {minerval} FC. Payé : {paye} FC. Solde : {reste} FC. {statut}`,
        `{eleve} : {paye} FC payés sur {minerval} FC. Reste {reste} FC. {statut}`,
        `Minerval {minerval} FC. Payé : {paye} FC. À payer : {reste} FC pour {eleve}. {statut}`,
        `Comptabilité {eleve} : {paye} FC réglés, reste {reste} FC. {statut}`,
        `{eleve} doit {reste} FC sur {minerval} FC. Payé : {paye} FC. {statut}`,
        `Paiements {eleve} : {paye} FC encaissés, reste {reste} FC. {statut}`,
        `Compte de {eleve} : {paye} FC payés. Solde : {reste} FC. {statut}`,
        `{eleve} : {paye} FC déjà payés, {reste} FC restants. {statut}`,
        `Frais {eleve} : {paye} FC / {minerval} FC. Reste {reste} FC. {statut}`,
        `Pour {eleve}, frais : {minerval} FC par mois. Payé {paye} FC. {statut}`,
        `{eleve} a payé {paye} FC. Reste {reste} FC sur {minerval} FC. {statut}`,
        `Minerval de {eleve} : {minerval} FC. Payé {paye} FC. Solde {reste} FC. {statut}`,
        `{eleve} : paiements {paye} FC, reste {reste} FC. {statut}`,
        `Frais scolaires {eleve} : {paye} FC payés, {reste} FC restants. {statut}`,
        `Compte financier {eleve} : {paye} FC, reste {reste} FC. {statut}`,
        `{eleve} : {minerval} FC par mois. Payé {paye} FC. Reste {reste} FC. {statut}`,
        `Pour {eleve}, {paye} FC payés sur {minerval} FC. Reste {reste} FC. {statut}`,
        `Frais de {eleve} : {paye} FC réglés, reste {reste} FC. {statut}`,
        `{eleve} doit encore {reste} FC sur {minerval} FC. {statut}`,
        `Situation financière {eleve} : {paye} FC payés, reste {reste} FC. {statut}`,
        `{eleve} : {paye} FC / {minerval} FC payés. Reste {reste} FC. {statut}`,
        `Minerval {minerval} FC. Payé {paye} FC. Reste {reste} FC pour {eleve}. {statut}`,
        `{eleve} a réglé {paye} FC, reste {reste} FC. {statut}`,
        `Frais de {eleve} : {paye} FC, reste {reste} FC sur {minerval} FC. {statut}`
    ],
    
    // ==========================================
    // 3️⃣ STATUT FRAIS - 25 variantes
    // ==========================================
    STATUT_FRAIS: [
        `En ordre.`,
        `À jour.`,
        `Rien à payer.`,
        `Tout est réglé.`,
        `Compte à jour.`,
        `Paiements faits.`,
        `En règle.`,
        `Aucun impayé.`,
        `Situation bonne.`,
        `Tout est bon.`,
        `RAS.`,
        `OK.`,
        `Payé.`,
        `Compte OK.`,
        `En ordre de paiement.`,
        `À jour des frais.`,
        `Rien à signaler.`,
        `Tout payé.`,
        `Situation régulière.`,
        `Frais couverts.`,
        `Paiements complets.`,
        `Aucune dette.`,
        `En règle de paiement.`,
        `Tout est en ordre.`,
        `Solde OK.`
    ],
    
    // ==========================================
    // 4️⃣ PRÉSENCE - 25 variantes
    // ==========================================
    PRESENCE: [
        `Aujourd'hui, {eleve} est {statut}.`,
        `Présence de {eleve} aujourd'hui : {statut}.`,
        `{eleve} est {statut} aujourd'hui.`,
        `Pour {eleve} aujourd'hui : {statut}.`,
        `{eleve} a été marqué {statut}.`,
        `{eleve} est {statut} ce jour.`,
        `Présence du jour pour {eleve} : {statut}.`,
        `{eleve} est {statut} pour la journée.`,
        `Aujourd'hui, {eleve} est {statut}.`,
        `{eleve} est {statut} aujourd'hui.`,
        `Présence : {eleve} est {statut}.`,
        `{eleve} est {statut} ce matin/après-midi.`,
        `Pour {eleve}, présence : {statut}.`,
        `{eleve} est {statut} pour ce cours.`,
        `La présence de {eleve} est {statut}.`,
        `{eleve} est {statut} aujourd'hui.`,
        `Aujourd'hui, {eleve} est {statut}.`,
        `{eleve} a été enregistré {statut}.`,
        `Présence : {eleve} est {statut} ce jour.`,
        `{eleve} est {statut} pour le moment.`,
        `Statut de {eleve} aujourd'hui : {statut}.`,
        `{eleve} est {statut} ce jour.`,
        `Présence de {eleve} : {statut}.`,
        `{eleve} est {statut} actuellement.`,
        `Aujourd'hui, {eleve} est {statut}.`
    ],
    
    // ==========================================
    // 5️⃣ PUNITIONS - 25 variantes
    // ==========================================
    PUNITIONS: [
        `{eleve} a {nb} punition(s) : {liste}`,
        `Sanctions de {eleve} : {nb} punition(s) - {liste}`,
        `{eleve} : {nb} punition(s) active(s) : {liste}`,
        `Punitions de {eleve} : {nb} - {liste}`,
        `Discipline {eleve} : {nb} punition(s) - {liste}`,
        `{eleve} a {nb} sanction(s) : {liste}`,
        `Punitions enregistrées pour {eleve} : {nb} - {liste}`,
        `{eleve} : {nb} punition(s) - {liste}`,
        `Sanctions pour {eleve} : {nb} - {liste}`,
        `{eleve} a {nb} punition(s) : {liste}`,
        `Punitions de {eleve} : {nb} au total - {liste}`,
        `{eleve} a {nb} sanction(s) active(s) : {liste}`,
        `Discipline : {eleve} a {nb} punition(s) - {liste}`,
        `{eleve} : {nb} punition(s) enregistrée(s) - {liste}`,
        `Sanctions actives de {eleve} : {nb} - {liste}`,
        `{eleve} totalise {nb} punition(s) : {liste}`,
        `Punitions pour {eleve} : {nb} - {liste}`,
        `{eleve} a {nb} punition(s) active(s) : {liste}`,
        `Liste des punitions de {eleve} : {nb} - {liste}`,
        `{eleve} : {nb} sanction(s) au total - {liste}`,
        `Punitions de {eleve} : {nb} actives - {liste}`,
        `{eleve} a reçu {nb} punition(s) : {liste}`,
        `Sanctions de {eleve} : {nb} au total - {liste}`,
        `{eleve} : {nb} punition(s) - {liste}`,
        `Punitions en cours pour {eleve} : {nb} - {liste}`
    ],
    
    // ==========================================
    // 6️⃣ SEXE - 25 variantes
    // ==========================================
    SEXE: [
        `{eleve} est un {genre}.`,
        `C'est un {genre} : {eleve}.`,
        `{eleve} est de sexe {genre}.`,
        `Il s'agit d'un {genre} : {eleve}.`,
        `Sexe de {eleve} : {genre}.`,
        `C'est un {genre} nommé {eleve}.`,
        `{eleve} est un(e) {genre}.`,
        `Le genre de {eleve} est {genre}.`,
        `{eleve} est de genre {genre}.`,
        `C'est un {genre} appelé {eleve}.`,
        `{eleve} est un {genre}.`,
        `Le sexe de {eleve} est {genre}.`,
        `C'est un {genre} : {eleve}.`,
        `{eleve} est de sexe {genre}.`,
        `Genre : {eleve} est un {genre}.`,
        `{eleve} est un {genre}.`,
        `Sexe : {genre} pour {eleve}.`,
        `C'est un {genre} du nom de {eleve}.`,
        `{eleve} est un(e) {genre}.`,
        `Le genre de {eleve} est {genre}.`,
        `{eleve} est de genre {genre}.`,
        `C'est un {genre} prénommé {eleve}.`,
        `{eleve} est un {genre}.`,
        `Sexe de {eleve} : {genre}.`,
        `{eleve} est un(e) {genre}.`
    ],
    
    // ==========================================
    // 7️⃣ CLASSE - 25 variantes
    // ==========================================
    CLASSE: [
        `{eleve} est en {classe}{option}.`,
        `{eleve} est en classe de {classe}{option}.`,
        `Classe de {eleve} : {classe}{option}.`,
        `{eleve} suit les cours en {classe}{option}.`,
        `{eleve} est dans la {classe}{option}.`,
        `{eleve} appartient à la classe {classe}{option}.`,
        `Inscription de {eleve} : {classe}{option}.`,
        `{eleve} : classe {classe}{option}.`,
        `La classe de {eleve} est {classe}{option}.`,
        `{eleve} est en {classe}{option}.`,
        `Classe de {eleve} : {classe}{option}.`,
        `{eleve} est dans la {classe}{option}.`,
        `{eleve} suit la classe {classe}{option}.`,
        `La classe de {eleve} : {classe}{option}.`,
        `{eleve} est inscrit en {classe}{option}.`,
        `Classe : {classe}{option} pour {eleve}.`,
        `{eleve} est en {classe}{option}.`,
        `{eleve} appartient à la {classe}{option}.`,
        `Classe de {eleve} : {classe}{option}.`,
        `{eleve} est dans la classe {classe}{option}.`,
        `Inscription : {classe}{option} pour {eleve}.`,
        `{eleve} est en classe {classe}{option}.`,
        `La classe de {eleve} est {classe}{option}.`,
        `{eleve} : {classe}{option}.`,
        `{eleve} est en {classe}{option}.`
    ],
    
    // ==========================================
    // 8️⃣ FALLBACK - 25 variantes
    // ==========================================
    FALLBACK: [
        `Posez une question précise sur {eleve} : notes, frais, présence ou punitions. Pour toute question générale, contactez la direction.`,
        `Précisez votre demande pour {eleve} : notes, frais, présence ou punitions. La direction répond aux questions générales.`,
        `Je vous aide sur {eleve} : notes, frais, présence ou punitions. Pour toute autre question, contactez la direction.`,
        `Posez une question sur {eleve} : notes, frais, présence ou punitions. Pour des questions plus larges, adressez-vous à la direction.`,
        `Pour {eleve}, je traite les notes, les frais, la présence et les punitions. Contactez la direction pour le reste.`,
        `Précisez ce que vous voulez savoir sur {eleve} : notes, frais, présence ou punitions. La direction est là pour les autres questions.`,
        `Je vous réponds sur {eleve} : notes, frais, présence ou punitions. Pour toute question générale, veuillez contacter la direction.`,
        `Pour {eleve}, je donne des infos sur les notes, les frais, la présence ou les punitions. La direction pour le reste.`,
        `Question précise sur {eleve} ? Dites-moi : notes, frais, présence ou punitions. La direction pour les questions générales.`,
        `Je réponds aux questions sur {eleve} (notes, frais, présence, punitions). Pour toute autre demande, contactez la direction.`,
        `Posez une question spécifique sur {eleve} : notes, frais, présence ou punitions. La direction est disponible.`,
        `Précisez votre question sur {eleve}. Je traite : notes, frais, présence, punitions. La direction pour les généralités.`,
        `Pour {eleve}, dites-moi ce que vous voulez : notes, frais, présence ou punitions. La direction pour le reste.`,
        `Je vous informe sur {eleve} (notes, frais, présence, punitions). Pour les questions complexes, contactez la direction.`,
        `Questions sur {eleve} ? Précisez : notes, frais, présence ou punitions. La direction est à votre disposition.`,
        `Pour {eleve}, je réponds sur les notes, les frais, la présence et les punitions. La direction pour les autres demandes.`,
        `Posez une question précise sur {eleve}. Je traite : notes, frais, présence ou punitions. La direction pour le reste.`,
        `Je vous aide pour {eleve} : notes, frais, présence ou punitions. Contactez la direction pour les questions générales.`,
        `Précisez votre demande sur {eleve}. Je réponds aux questions sur les notes, frais, présence et punitions.`,
        `Pour {eleve}, je donne des infos sur les notes, les frais, la présence ou les punitions. La direction pour le reste.`,
        `Question sur {eleve} ? Dites-moi : notes, frais, présence ou punitions. La direction pour les autres questions.`,
        `Je réponds aux questions précises sur {eleve} : notes, frais, présence ou punitions. La direction pour les généralités.`,
        `Pour {eleve}, je traite les notes, les frais, la présence et les punitions. La direction est disponible.`,
        `Posez une question spécifique sur {eleve}. Je vous réponds sur les notes, frais, présence ou punitions.`,
        `Pour toute question sur {eleve}, précisez : notes, frais, présence ou punitions. La direction pour les autres demandes.`
    ]
};

// ============================================
// FONCTION POUR CHOISIR AU HASARD
// ============================================
export function randomMessage(category, variables = {}) {
    const messages = MESSAGES[category];
    if (!messages || messages.length === 0) return "";
    
    const index = Math.floor(Math.random() * messages.length);
    let message = messages[index];
    
    // Remplacer les variables
    for (const [key, value] of Object.entries(variables)) {
        message = message.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
    }
    
    return message;
}
