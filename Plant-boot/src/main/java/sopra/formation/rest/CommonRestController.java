package sopra.formation.rest;

import org.hibernate.boot.model.naming.ImplicitJoinColumnNameSource.Nature;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import sopra.formation.model.Couleur;
import sopra.formation.model.Exposition;
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



@RestController
@CrossOrigin("*")
public class CommonRestController {
	@GetMapping("/nature")
	public Nature[] nature() {
		return Nature.values();
	}
	@GetMapping("/tempsDeVie")
	public TempsDeVie[] tempsDeVie() {
		return TempsDeVie.values();
	}
	@GetMapping("/presentation")
	public Presentation[] presentation() {
		return Presentation.values();
	}
	@GetMapping("/exposition")
	public Exposition[] exposition() {
		return Exposition.values();
	}
	@GetMapping("/sol")
	public Sol[] sol() {
		return Sol.values();
	}
	@GetMapping("/typeDeFeuille")
	public TypeDeFeuille[] typeDeFeuille() {
		return TypeDeFeuille.values();
	}
	@GetMapping("/tempsDeFeuille")
	public TempsDeFeuille[] tempsDeFeuille() {
		return TempsDeFeuille.values();
	}
	@GetMapping("/utilite")
	public Utilite[] utilite() {
		return Utilite.values();
	}
	@GetMapping("/utiliteOrnement")
	public UtiliteOrnement[] utiliteOrnement() {
		return UtiliteOrnement.values();
	}
	@GetMapping("/utiliteGastronomie")
	public UtiliteGastronomie[] utiliteGastronomie() {
		return UtiliteGastronomie.values();
	}
	@GetMapping("/couleur")
	public Couleur[] couleur() {
		return Couleur.values();
	}
	@GetMapping("/utiliteComposition")
	public UtiliteComposition[] utiliteComposition() {
		return UtiliteComposition.values();
	}
	@GetMapping("/utiliteCimetiere")
	public UtiliteCimetiere[] utiliteCimetiere() {
		return UtiliteCimetiere.values();
	}
	

}
