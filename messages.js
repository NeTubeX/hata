// ========================================================
// GESTION DES SALUTATIONS AVEC VARIATIONS HORAIRES
// ========================================================

export function getSalutation() {
    const heures = new Date().getHours();
    const minutes = new Date().getMinutes();
    
    // Matin (5h - 11h59)
    if (heures >= 5 && heures < 12) {
        const salutations = [
            "Bonjour",
            "Bonjour cher parent",
            "Bonjour à vous",
            "Bonjour et bienvenue"
        ];
        const index = (Math.floor(Math.random() * salutations.length) + minutes) % salutations.length;
        return salutations[index];
    }
    
    // Après-midi (12h - 17h59)
    if (heures >= 12 && heures < 18) {
        const salutations = [
            "Bon après-midi",
            "Bon après-midi cher parent",
            "Bonjour",
            "Bon après-midi à vous"
        ];
        const index = (Math.floor(Math.random() * salutations.length) + minutes) % salutations.length;
        return salutations[index];
    }
    
    // Soir (18h - 4h59)
    const salutations = [
        "Bonsoir",
        "Bonsoir cher parent",
        "Bonsoir à vous",
        "Bonne soirée"
    ];
    const index = (Math.floor(Math.random() * salutations.length) + minutes) % salutations.length;
    return salutations[index];
}

// ========================================================
// MESSAGES VARIÉS
// ========================================================

export const MESSAGES = {
    
    // ===== NOTES =====
    NOTES: [
        `Meilleure note de {eleve} : {note}/{max} en {matiere}.`,
        `{eleve} a eu {note}/{max} en {matiere}.`,
        `La meilleure note de {eleve} est {note}/{max} en {matiere}.`,
        `{eleve} a obtenu {note}/{max} en {matiere}.`,
        `Note max de {eleve} : {note}/{max} en {matiere}.`,
        `En {matiere}, {eleve} a fait {note}/{max}.`,
        `{eleve} a eu {note} sur {max} en {matiere}.`,
        `Résultat en {matiere} pour {eleve} : {note}/{max}.`,
        `{eleve} a marqué {note}/{max} en {matiere}.`,
        `Note de {eleve} : {note}/{max} en {matiere}.`,
        `{eleve} a {note}/{max} en {matiere}.`,
        `En {matiere}, {eleve} a eu {note}/{max}.`,
        `{eleve} a eu {note} points sur {max} en {matiere}.`,
        `Résultat de {eleve} en {matiere} : {note}/{max}.`,
        `{eleve} a obtenu {note}/{max} en {matiere}.`,
        `Note de {eleve} en {matiere} : {note}/{max}.`,
        `{eleve} a eu {note}/{max} en {matiere}.`,
        `{eleve} a fait {note}/{max} en {matiere}.`,
        `{matiere} : {eleve} a eu {note}/{max}.`,
        `Note en {matiere} de {eleve} : {note}/{max}.`,
        `{eleve} a marqué {note}/{max} en {matiere}.`,
        `En {matiere}, {eleve} a obtenu {note}/{max}.`,
        `Résultat de {eleve} : {note}/{max} en {matiere}.`,
        `{eleve} a réussi {note}/{max} en {matiere}.`,
        `En {matiere}, {eleve} a obtenu {note} sur {max}.`,
        `{eleve} a eu {note} points sur {max} en {matiere}.`
    ],

    // ===== FRAIS (sans statut) =====
    FRAIS: [
        `Frais de {eleve} : {minerval} FC/mois. Payé : {paye} FC. Reste : {reste} FC.`,
        `Pour {eleve}, minerval : {minerval} FC. Payé : {paye} FC. Solde : {reste} FC.`,
        `{eleve} : {paye} FC payés sur {minerval} FC. Reste {reste} FC.`,
        `Minerval {minerval} FC. Payé : {paye} FC. À payer : {reste} FC pour {eleve}.`,
        `Comptabilité {eleve} : {paye} FC réglés, reste {reste} FC.`,
        `{eleve} doit {reste} FC sur {minerval} FC. Payé : {paye} FC.`,
        `Paiements {eleve} : {paye} FC encaissés, reste {reste} FC.`,
        `Compte de {eleve} : {paye} FC payés. Solde : {reste} FC.`,
        `{eleve} : {paye} FC déjà payés, {reste} FC restants.`,
        `Frais {eleve} : {paye} FC / {minerval} FC. Reste {reste} FC.`,
        `Pour {eleve}, frais : {minerval} FC par mois. Payé {paye} FC.`,
        `{eleve} a payé {paye} FC. Reste {reste} FC sur {minerval} FC.`,
        `Minerval de {eleve} : {minerval} FC. Payé {paye} FC. Solde {reste} FC.`,
        `{eleve} : paiements {paye} FC, reste {reste} FC.`,
        `Frais scolaires {eleve} : {paye} FC payés, {reste} FC restants.`,
        `Compte financier {eleve} : {paye} FC, reste {reste} FC.`,
        `{eleve} : {minerval} FC par mois. Payé {paye} FC. Reste {reste} FC.`,
        `Pour {eleve}, {paye} FC payés sur {minerval} FC. Reste {reste} FC.`,
        `Frais de {eleve} : {paye} FC réglés, reste {reste} FC.`,
        `{eleve} doit encore {reste} FC sur {minerval} FC.`,
        `Situation financière {eleve} : {paye} FC payés, reste {reste} FC.`,
        `{eleve} : {paye} FC / {minerval} FC payés. Reste {reste} FC.`,
        `Minerval {minerval} FC. Payé {paye} FC. Reste {reste} FC pour {eleve}.`,
        `{eleve} a réglé {paye} FC, reste {reste} FC.`,
        `Frais de {eleve} : {paye} FC, reste {reste} FC sur {minerval} FC.`,
        `Pour {eleve}, le minerval est de {minerval} FC. Déjà payé : {paye} FC. Reste : {reste} FC.`,
        `Compte de {eleve} : {paye} FC encaissés, reste {reste} FC à payer.`,
        `{eleve} a versé {paye} FC sur {minerval} FC. Solde : {reste} FC.`,
        `Frais de scolarité {eleve} : {paye} FC réglés, reste {reste} FC.`,
        `Minerval mensuel : {minerval} FC. Payé : {paye} FC. Reste : {reste} FC pour {eleve}.`
    ],

    // ===== PRÉSENCE =====
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
        `Présence : {eleve} est {statut}.`,
        `{eleve} est {statut} ce matin/après-midi.`,
        `Pour {eleve}, présence : {statut}.`,
        `{eleve} est {statut} pour ce cours.`,
        `La présence de {eleve} est {statut}.`,
        `{eleve} a été enregistré {statut}.`,
        `Statut de {eleve} aujourd'hui : {statut}.`,
        `Présence de {eleve} : {statut}.`,
        `{eleve} est {statut} actuellement.`,
        `{eleve} est noté {statut} aujourd'hui.`,
        `Statut de présence de {eleve} : {statut}.`,
        `Pour {eleve}, aujourd'hui = {statut}.`
    ],

    // ===== PUNITIONS =====
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
        `Punitions en cours pour {eleve} : {nb} - {liste}`,
        `{eleve} a {nb} punition(s) enregistrée(s) : {liste}`,
        `Discipline : {eleve} a {nb} sanction(s) - {liste}`,
        `Sanctions actives : {nb} pour {eleve} - {liste}`
    ],

    // ===== SEXE =====
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
        `Le sexe de {eleve} est {genre}.`,
        `Genre : {eleve} est un {genre}.`,
        `Sexe : {genre} pour {eleve}.`,
        `C'est un {genre} du nom de {eleve}.`,
        `Le genre de {eleve} est {genre}.`
    ],

    // ===== CLASSE =====
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
        `Classe de {eleve} : {classe}{option}.`,
        `{eleve} est dans la {classe}{option}.`,
        `{eleve} suit la classe {classe}{option}.`,
        `La classe de {eleve} : {classe}{option}.`,
        `{eleve} est inscrit en {classe}{option}.`,
        `Classe : {classe}{option} pour {eleve}.`,
        `{eleve} appartient à la {classe}{option}.`,
        `{eleve} est dans la classe {classe}{option}.`,
        `Inscription : {classe}{option} pour {eleve}.`,
        `{eleve} est en classe {classe}{option}.`,
        `La classe de {eleve} est {classe}{option}.`
    ],

    // ===== BONJOUR =====
    BONJOUR: [
        `{salutation} cher parent ! Entrez votre code parent (6 chiffres).`,
        `{salutation} ! Veuillez entrer votre code parent à 6 chiffres.`,
        `{salutation} cher parent. Le système est prêt. Entrez votre code.`,
        `{salutation} ! Je suis là pour vous aider. Entrez votre code parent.`,
        `{salutation} cher parent. Code parent (6 chiffres) pour accéder aux infos.`,
        `{salutation} ! Bienvenue. Entrez votre code parent pour commencer.`,
        `{salutation} cher parent. Je vous attends. Code parent, s'il vous plaît.`,
        `{salutation} ! Votre code parent (6 chiffres) permet d'accéder aux données.`,
        `{salutation} cher parent. Entrez votre code pour voir les notes et plus.`,
        `{salutation} ! Code parent requis pour accéder à l'espace parental.`
    ],

    // ===== MERCI =====
    MERCI: [
        `De rien, c'est un plaisir de vous aider !`,
        `Avec plaisir, revenez quand vous voulez !`,
        `Je suis content d'avoir pu vous aider.`,
        `Pas de problème, à votre service !`,
        `C'était un plaisir, bonne journée !`,
        `Je vous en prie, revenez si besoin.`,
        `Avec plaisir, bonne continuation !`,
        `C'est tout naturel, bonne journée.`,
        `Ravi d'avoir pu vous aider !`,
        `Pas de souci, à bientôt !`,
        `Merci à vous, bonne journée !`,
        `C'était un plaisir, à votre service.`,
        `Je vous en prie, revenez quand vous voulez.`,
        `Avec joie, bonne continuation !`,
        `Pas de problème, à bientôt !`
    ],

    // ===== AU REVOIR =====
    AU_REVOIR: [
        `Au revoir cher parent ! Passez une bonne journée.`,
        `Au revoir ! À bientôt sur l'espace parental.`,
        `Au revoir cher parent ! Revenez quand vous voulez.`,
        `Au revoir ! Bonne journée à vous.`,
        `Au revoir cher parent ! À la prochaine.`,
        `Au revoir ! Prenez soin de vous.`,
        `Au revoir cher parent ! Bonne continuation.`,
        `Au revoir ! N'hésitez pas à revenir.`,
        `Au revoir cher parent ! Passez une excellente journée.`,
        `Au revoir ! Je reste à votre disposition.`,
        `Au revoir cher parent ! Bonne soirée.`,
        `Au revoir ! À bientôt.`,
        `Au revoir cher parent ! Prenez soin de vous.`,
        `Au revoir ! Bonne journée à vous et votre famille.`,
        `Au revoir cher parent ! À la prochaine fois.`,
        `Au revoir ! Passez un bon moment.`
    ],

    // ===== FALLBACK =====
    FALLBACK: [
        `Posez une question précise sur {eleve} : notes, frais, présence ou punitions.`,
        `Précisez votre demande pour {eleve} : notes, frais, présence ou punitions.`,
        `Je vous aide sur {eleve} : notes, frais, présence ou punitions.`,
        `Posez une question sur {eleve} : notes, frais, présence ou punitions.`,
        `Pour {eleve}, je traite les notes, les frais, la présence et les punitions.`,
        `Précisez ce que vous voulez savoir sur {eleve} : notes, frais, présence ou punitions.`,
        `Je vous réponds sur {eleve} : notes, frais, présence ou punitions.`,
        `Pour {eleve}, je donne des infos sur les notes, les frais, la présence ou les punitions.`,
        `Question précise sur {eleve} ? Dites-moi : notes, frais, présence ou punitions.`,
        `Je réponds aux questions sur {eleve} (notes, frais, présence, punitions).`,
        `Posez une question spécifique sur {eleve} : notes, frais, présence ou punitions.`,
        `Précisez votre question sur {eleve}. Je traite : notes, frais, présence, punitions.`,
        `Pour {eleve}, dites-moi ce que vous voulez : notes, frais, présence ou punitions.`,
        `Je vous informe sur {eleve} (notes, frais, présence, punitions).`,
        `Questions sur {eleve} ? Précisez : notes, frais, présence ou punitions.`
    ],

    // ===== INSCRIPTION DÉSACTIVÉE =====
    INSCRIPTION_DESACTIVEE: [
        `Je suis vraiment désolé, les informations financières ne sont pas rendues publiques pour cette école. Veuillez contacter la comptabilité de l'école {nomEcole} pour toute question sur la finance.\n\nMais, Je peux toutefois vous aider concernant ses notes, ses punitions ou la présence de {nomEleve}.\n\nQue souhaitez-vous consulter en premier ?`,
        `Désolé, les données financières ne sont pas accessibles pour {nomEcole}. Veuillez contacter la comptabilité.\n\nEn attendant, je peux vous parler des notes, des punitions ou de la présence de {nomEleve}. Que voulez-vous voir ?`,
        `Je ne peux pas vous donner d'informations financières pour {nomEcole}. Veuillez contacter la comptabilité.\n\nJe peux toutefois vous renseigner sur les notes, les punitions ou la présence de {nomEleve}. Par quoi commencez-vous ?`,
        `Les informations financières ne sont pas disponibles pour {nomEcole}. Veuillez contacter la comptabilité.\n\nMais je peux vous aider avec les notes, les punitions ou la présence de {nomEleve}. Que souhaitez-vous consulter ?`,
        `Je suis désolé, la finance n'est pas publique pour {nomEcole}. Contactez la comptabilité.\n\nJe peux tout de même vous parler des notes, des punitions ou de la présence de {nomEleve}. Votre choix ?`,
        `Accès aux données financières refusé pour {nomEcole}. Veuillez contacter la comptabilité.\n\nEn revanche, je peux vous donner des informations sur les notes, les punitions ou la présence de {nomEleve}. Que préférez-vous ?`,
        `Désolé, les frais scolaires ne sont pas accessibles pour {nomEcole}. Contactez la comptabilité.\n\nJe peux vous aider avec les notes, les punitions ou la présence de {nomEleve}. Par quoi voulez-vous commencer ?`,
        `Je ne peux pas divulguer les informations financières de {nomEcole}. Veuillez contacter la comptabilité.\n\nJe peux toutefois vous parler des notes, des punitions ou de la présence de {nomEleve}. Que souhaitez-vous consulter en premier ?`,
        `Les finances de l'école {nomEcole} ne sont pas publiques. Contactez la comptabilité.\n\nMais je suis là pour vous aider avec les notes, les punitions ou la présence de {nomEleve}. Que voulez-vous voir en premier ?`,
        `Je suis au regret de vous dire que les données financières ne sont pas accessibles pour {nomEcole}. Veuillez contacter la comptabilité.\n\nJe peux toutefois vous renseigner sur les notes, les punitions ou la présence de {nomEleve}. Que choisissez-vous ?`,
        `Pour des raisons de confidentialité, les informations financières de {nomEcole} ne sont pas publiques. Contactez la comptabilité.\n\nJe peux vous aider avec les notes, les punitions ou la présence de {nomEleve}. Par où commencez-vous ?`,
        `Les données financières de {nomEcole} sont protégées. Veuillez contacter la comptabilité.\n\nJe reste disponible pour vous parler des notes, des punitions ou de la présence de {nomEleve}. Que souhaitez-vous ?`,
        `Désolé, je ne peux pas donner d'informations financières pour {nomEcole}. Contactez la comptabilité.\n\nJe peux vous aider sur les notes, les punitions ou la présence de {nomEleve}. Voulez-vous en savoir plus ?`,
        `Je ne peux pas vous renseigner sur les finances de {nomEcole}. Veuillez contacter la comptabilité.\n\nEn revanche, je peux vous parler des notes, des punitions ou de la présence de {nomEleve}. Que voulez-vous consulter ?`,
        `Les frais et finances de {nomEcole} ne sont pas accessibles. Contactez la comptabilité.\n\nJe peux vous donner des informations sur les notes, les punitions ou la présence de {nomEleve}. Par quoi voulez-vous commencer ?`
    ]
};

// ========================================================
// FONCTION DE SÉLECTION ALÉATOIRE
// ========================================================

export function randomMessage(category, variables = {}) {
    const messages = MESSAGES[category];
    if (!messages || messages.length === 0) return "";
    
    // Sélection aléatoire avec décalage basé sur les minutes
    const minutes = new Date().getMinutes();
    const index = (Math.floor(Math.random() * messages.length) + minutes) % messages.length;
    let message = messages[index];
    
    // Remplacer les variables
    for (const [key, value] of Object.entries(variables)) {
        message = message.replace(new RegExp(`\\{${key}\\}`, 'g'), value);
    }
    
    return message;
}

// ========================================================
// FONCTION POUR LE MESSAGE D'INSCRIPTION DÉSACTIVÉE
// ========================================================

export function getInscriptionDesactiveMessage(nomEcole, nomEleve) {
    const minutes = new Date().getMinutes();
    const messages = MESSAGES.INSCRIPTION_DESACTIVEE;
    const index = (Math.floor(Math.random() * messages.length) + minutes) % messages.length;
    let message = messages[index];
    message = message.replace(/\{nomEcole\}/g, nomEcole);
    message = message.replace(/\{nomEleve\}/g, nomEleve || 'votre enfant');
    return message;
}

// ========================================================
// FONCTION POUR UNE SALUTATION AVEC VARIATIONS
// ========================================================

export function getSalutationVariation() {
    const heures = new Date().getHours();
    const minutes = new Date().getMinutes();
    
    if (heures >= 5 && heures < 12) {
        const salutations = [
            "Bonjour cher parent",
            "Bonjour à vous",
            "Bonjour et bienvenue",
            "Bonjour, ravi de vous voir"
        ];
        const index = (Math.floor(Math.random() * salutations.length) + minutes) % salutations.length;
        return salutations[index];
    }
    
    if (heures >= 12 && heures < 18) {
        const salutations = [
            "Bon après-midi cher parent",
            "Bonjour, bonne après-midi",
            "Bon après-midi à vous",
            "Bonjour, belle après-midi"
        ];
        const index = (Math.floor(Math.random() * salutations.length) + minutes) % salutations.length;
        return salutations[index];
    }
    
    const salutations = [
        "Bonsoir cher parent",
        "Bonsoir à vous",
        "Bonne soirée",
        "Bonsoir et bienvenue"
    ];
    const index = (Math.floor(Math.random() * salutations.length) + minutes) % salutations.length;
    return salutations[index];
}
