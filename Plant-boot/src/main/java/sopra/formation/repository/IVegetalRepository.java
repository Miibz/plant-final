package sopra.formation.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import sopra.formation.model.Comportement;
import sopra.formation.model.Couleur;
import sopra.formation.model.Exposition;
import sopra.formation.model.Nature;
import sopra.formation.model.Presentation;
import sopra.formation.model.Sol;
import sopra.formation.model.TempsDeFeuille;
import sopra.formation.model.TempsDeVie;
import sopra.formation.model.TypeDeFeuille;
import sopra.formation.model.Utilite;
import sopra.formation.model.UtiliteCimetiere;
import sopra.formation.model.UtiliteComposition;
import sopra.formation.model.UtiliteGastronomie;
import sopra.formation.model.UtiliteOrnement;
import sopra.formation.model.UtilitePresentation;
import sopra.formation.model.Vegetal;

public interface IVegetalRepository extends  JpaRepository<Vegetal,Long> {

	@Query("select v from Vegetal v where v.nom = :nom")
	Optional<Vegetal> findVegetalByNom(@Param("nom") String nom);
	
//	@Query("select v from Vegetal v where v.nature=:nature and (:tempsDeVie is null or v.tempsDeVie=:tempsDeVie)")
//	Optional<List<Vegetal>> findVegetalByRecherche(@Param("nature") Nature nature, @Param("tempsDeVie") TempsDeVie tempsDeVie);

	@Query("select v from Vegetal v where v.nature = :nature and (:tempsDeVie is null or v.tempsDeVie=:tempsDeVie) and (:exposition is null or v.exposition=:exposition) and (:sol is null or v.sol=:sol) and (:comportement is null or v.comportement=:comportement) and (:couleur is null or v.couleur=:couleur) and (:utilite is null or v.utilite=:utilite) and (:typeDeFeuille is null or v.typeDeFeuille=:typeDeFeuille) and (:tempsDeFeuille is null or v.tempsDeFeuille=:tempsDeFeuille) and (:presentation is null or v.presentation=:presentation) and (:utiliteOrnement is null or v.utiliteOrnement=:utiliteOrnement) and (:utiliteGastronomie is null or v.utiliteGastronomie=:utiliteGastronomie) and (:utiliteComposition is null or v.utiliteComposition=:utiliteComposition) and (:utiliteCimetiere is null or utiliteCimetiere=:utiliteCimetiere) and (:utilitePresentation is null or utilitePresentation=:utilitePresentation)")
//	@Query("select v from Vegetal v where v.nature = :nature and (:v.tempsDeVie is null or v.tempsDeVie=:tempsDeVie) and v.exposition=:exposition and v.sol=:sol and v.comportement=:comportement and v.couleur=:couleur and v.utilite=:utilite and v.typeDeFeuille=:typeDeFeuille and v.tempsDeFeuille=:tempsDeFeuille and v.presentation=:presentation and v.utiliteOrnement=:utiliteOrnement and v.utiliteGastronomie=:utiliteGastronomie and v.utiliteComposition=:utiliteComposition and utiliteCimetiere=:utiliteCimetiere and utilitePresentation=:utilitePresentation")
	Optional<List<Vegetal>> findVegetalByRecherche(@Param("nature") Nature nature,@Param("tempsDeVie") TempsDeVie tempsDeVie,@Param("exposition") Exposition exposition,@Param("sol") Sol sol,@Param("comportement") Comportement comportement,@Param("couleur") Couleur couleur,@Param("utilite") Utilite utilite,@Param("typeDeFeuille") TypeDeFeuille typeDeFeuille,@Param("tempsDeFeuille") TempsDeFeuille tempsDeFeuille,@Param("presentation") Presentation presentation,@Param("utiliteOrnement") UtiliteOrnement utiliteOrnement,@Param("utiliteGastronomie") UtiliteGastronomie utiliteGastronomie,@Param("utiliteComposition") UtiliteComposition utiliteComposition,@Param("utiliteCimetiere") UtiliteCimetiere utiliteCimetiere,@Param("utilitePresentation") UtilitePresentation utilitePresentation);
//	@Query("select v from Vegetal v where (:v.nature is null or v.nature = :nature) and (:v.tempsDeVie is null or v.tempsDeVie=:tempsDeVie) and (:v.exposition is null or v.exposition=:exposition) and (:v.sol is null or v.sol=:sol) and (:v.comportement is null or v.comportement=:comportement) and (:v.couleur is null or v.couleur=:couleur) and (:v.utilite is null or v.utilite=:utilite) and (:v.typeDeFeuille is null or v.typeDeFeuille=:typeDeFeuille) and (:v.tempsDeFeuille is null or v.tempsDeFeuille=:tempsDeFeuille) and (:v.presentation is null or v.presentation=:presentation) and (:v.utiliteOrnement is null or v.utiliteOrnement=:utiliteOrnement) and (:v.utiliteGastronomie is null or v.utiliteGastronomie=:utiliteGastronomie) and (:v.utiliteComposition is null or v.utiliteComposition=:utiliteComposition) and (:utiliteCimetiere is null or utiliteCimetiere=:utiliteCimetiere) and (:utilitePresentation is null or utilitePresentation=:utilitePresentation)")
//	@Query("select v from Vegetal v where v.nature = :nature and v.tempsDeVie=:tempsDeVie and v.exposition=:exposition and v.sol=:sol and v.comportement=:comportement and v.couleur=:couleur and v.utilite=:utilite and v.typeDeFeuille=:typeDeFeuille and v.tempsDeFeuille=:tempsDeFeuille and v.presentation=:presentation and v.utiliteOrnement=:utiliteOrnement and v.utiliteGastronomie=:utiliteGastronomie and v.utiliteComposition=:utiliteComposition and utiliteCimetiere=:utiliteCimetiere and utilitePresentation=:utilitePresentation")


}