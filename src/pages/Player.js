import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import "./Player.css";  

function Player() {
    const { id } = useParams();
    let playerclassImages = "player-image";

    // Utilisez l'ID pour déterminer l'image à afficher
    let playerImage;
    switch (id) {
        case '0':
            playerImage = image2;
            break;
        case '1':
            playerImage = image3;
            break;
        case '2':
            playerImage = image4;
            break;
        case '3':
            playerclassImages = "player-image-bottom"
            playerImage = image5;
            break;
        case '4':
            playerImage = image6;
            break;
        case '5':
            playerclassImages = "player-image-top"
            playerImage = image7;
            break;   
        case '6':
            playerImage = image8;
            break; 
        case '7':
            playerImage = image9;
            break;
        case '8':
            playerclassImages = "player-image-top"
            playerImage = image10;
            break;   
        case '9':
            playerImage = image11;
            break;             
        // Ajoutez plus de cas pour d'autres ID si nécessaire
        default:
            playerImage = null; // Si aucune image correspondante n'est trouvée
            break;
    }
 
    // Utilisez l'ID pour déterminer le texte à afficher
    let playerText;
    let playerName; // Ajout de la variable pour stocker le nom du joueur
    switch (id) {
        case '0':
            playerName = "Kylian Mbappé";
            playerText = "Dans chaque foulée, une explosion de vitesse et de talent. Mbappé incarne la jeunesse et la férocité sur le terrain. Sa maîtrise du ballon et sa capacité à dépasser les défenseurs en font l'un des joueurs les plus excitants à regarder. Doté d'une vision incroyable et d'un sang-froid devant le but, il est prêt à dominer le monde du football pendant de nombreuses années encore.Mbappé, c'est aussi l'espoir d'une nation, le visage d'une nouvelle génération de footballeurs français. Son énergie contagieuse et son enthousiasme débordant inspirent les jeunes partout dans le monde à poursuivre leurs rêves avec détermination. Sur et en dehors du terrain, il incarne le futur du football.";
            break;
        case '1':
            playerName = "Neymar Jr.";
            playerText = "Flamboyant et imprévisible, Neymar éblouit les foules avec ses dribbles déroutants et ses gestes techniques éblouissants. Son style de jeu excentrique et sa capacité à changer le cours d'un match en un instant en font l'un des joueurs les plus fascinants de sa génération. Avec une touche de ballon magique et une créativité infinie, il transforme chaque match en spectacle.Mais derrière le glamour et les projecteurs se cache un compétiteur féroce. Neymar est un perfectionniste qui travaille sans relâche pour atteindre l'excellence sur le terrain. Son dévouement à son sport et sa volonté de gagner en font un leader incontesté, capable d'inspirer son équipe à la victoire.";
            break;
        case '2':
            playerName = "Xavi Hernandez";
            playerText = "Le métronome du milieu de terrain, Xavi est le cerveau derrière chaque mouvement de son équipe. Sa vision du jeu et sa capacité à dicter le rythme de la rencontre font de lui l'un des meilleurs milieux de terrain de tous les temps. Avec une précision chirurgicale dans ses passes et une compréhension intuitive du jeu, il contrôle le flux du match à sa guise.Mais Xavi est bien plus qu'un simple joueur de football. C'est un leader silencieux qui inspire ses coéquipiers par son exemple sur le terrain et en dehors. Son éthique de travail exemplaire et son engagement envers le succès de son équipe font de lui un modèle pour les jeunes joueurs du monde entier.";
            break;
        case '3':
            playerName = "Cristiano Ronaldo";
            playerText = "Cristiano Ronaldo, un nom qui résonne dans l'histoire du football comme l'un des plus grands de tous les temps. Son parcours légendaire est marqué par une détermination sans faille, une éthique de travail incomparable et une soif insatiable de succès. À chaque match, il repousse les limites de ce qui est possible, défiant les attentes et écrivant son propre destin.Mais derrière la gloire et les trophées se cache un homme humble, toujours reconnaissant envers ses fans et dévoué à sa famille. Cristiano Ronaldo incarne les valeurs de travail acharné, de détermination et de respect, inspirant des millions de personnes à travers le monde à poursuivre leurs rêves avec passion et détermination.";
            break;
        case '4':
            playerName = "Kevin De Bruyne";
            playerText = "Le stratège du milieu de terrain, De Bruyne allie intelligence et créativité à chaque toucher de balle. Sa capacité à lire le jeu et à exécuter des passes précises en fait l'un des joueurs les plus redoutables de sa génération. Avec une vision du jeu exceptionnelle et une technique impeccable, il est le moteur qui alimente l'attaque de son équipe.Mais au-delà de ses qualités sur le terrain, De Bruyne est un compétiteur féroce qui ne recule devant rien pour atteindre la victoire. Son leadership et son dévouement en font un joueur indispensable pour son équipe, capable de changer le cours d'un match en un instant.";
            break;
        case '5':
            playerName = "Robert Lewandowski";
            playerText = "Le prédateur de la surface de réparation, Lewandowski est un buteur né avec un flair inné pour trouver le fond des filets. Sa présence physique imposante et son instinct aiguisé en font l'un des attaquants les plus redoutables du monde. Toujours là où il faut être au bon moment, il est un cauchemar pour les défenses adverses.Mais Lewandowski est bien plus qu'un simple buteur. C'est un leader sur et en dehors du terrain, capable d'inspirer ses coéquipiers à donner le meilleur d'eux-mêmes à chaque match. Son éthique de travail exemplaire et son engagement envers le succès de son équipe en font un joueur respecté et admiré par ses pairs.";
            break;   
        case '6':
            playerName = "Ronaldinho Gaucho";
            playerText = "L'artiste du football, Ronaldinho enflamme les foules avec sa magie et son talent inégalés. Ses dribbles déconcertants et ses gestes techniques incroyables font de lui l'un des joueurs les plus spectaculaires de tous les temps. Avec un sourire contagieux et une joie de jouer évidente, il charme le public à chaque instant.Mais derrière le spectacle et la fantaisie se cache un joueur exceptionnellement talentueux et dévoué à son sport. Ronaldinho est un compétiteur né, toujours prêt à se battre pour la victoire. Son influence dépasse les limites du terrain, inspirant des générations de joueurs à repousser les frontières de ce qui est possible.";
            break;       
        case '7':
            playerName = "Antoine Griezmann";
            playerText = "Antoine Griezmann, un joueur talentueux doté d'une polyvalence exceptionnelle sur le terrain. Sa capacité à marquer des buts spectaculaires et à créer des opportunités pour ses coéquipiers en fait l'un des joueurs les plus excitants à regarder. Avec une intelligence de jeu remarquable et une technique impeccable, il est un atout précieux pour toute équipe.Mais Griezmann est bien plus qu'un simple joueur de football. C'est un compétiteur acharné qui ne recule jamais devant un défi. Son dévouement à son sport et son engagement envers le succès de son équipe en font un leader respecté sur et en dehors du terrain. Son influence dépasse les limites du football, inspirant des millions de personnes à poursuivre leurs rêves avec passion et détermination.";
            break;
        case '8':
            playerName = "Olivier Giroud";
            playerText = "Olivier Giroud, un attaquant au style unique qui défie les attentes et impressionne par sa polyvalence sur le terrain. Sa présence imposante dans la surface de réparation en fait une menace constante pour les défenses adverses. Avec une habileté aérienne exceptionnelle et un sens aigu du placement, il est capable de marquer des buts cruciaux dans les moments les plus tendus.Mais Giroud est bien plus qu'un simple buteur. C'est un joueur d'équipe dévoué, prêt à sacrifier son propre succès pour le bien de l'équipe. Son travail acharné et son attitude positive font de lui un leader respecté dans le vestiaire, capable d'inspirer ses coéquipiers à donner le meilleur d'eux-mêmes à chaque match.";
            break;   
        case '9':
            playerName = "Ibrahimovic Zlatan";
            playerText = "Zlatan Ibrahimović, une légende vivante du football dont le nom résonne à travers les époques. Son style de jeu unique et sa personnalité charismatique en font l'un des joueurs les plus emblématiques de sa génération. Avec une force physique impressionnante et une technique raffinée, il est capable de changer le cours d'un match en un instant.Mais derrière l'arrogance et la bravade se cache un compétiteur féroce, toujours affamé de succès et de victoires. Zlatan est un leader né, capable d'inspirer ses coéquipiers par son exemple sur le terrain et sa détermination sans faille. Son héritage dans le football restera gravé dans l'histoire pour les générations à venir.";
            break;               
        // Ajoutez plus de cas pour d'autres ID si nécessaire
        default:
            playerName = "Joueur inconnu";
            playerText = "Texte par défaut pour les autres joueurs";
            break;
    }
 
    return (
        <>
            <NavBar />
            <div className="player-container">
                <div className="player-info">
                    <h1><strong>{playerName.toUpperCase()}</strong></h1>
                    <div className="text-container">
                        <p>{playerText}</p>
                    </div>
                </div>
                {playerImage && <img src={playerImage} alt={playerName} className= {playerclassImages} />}
            </div>
            <div className="custom-button">Commander ce joueur</div>
        </>
    );
}
 
export default Player;


