package sopra.formation.model;



import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class Recette {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@JsonView(Views.ViewCommon.class)
	private String nom;
//	private List<String> ingredientsNonVegetaux;
	@OneToMany(mappedBy="recette")
	@JsonView(Views.ViewRecette.class)
	private List<RecetteJardin> recetteJardin;
	@JsonView(Views.ViewRecette.class)
	private String  methode;
	
	public Recette() {
		super();
	}
	public Recette(Long id, String nom, List<String> ingredientsNonVegetaux, List<RecetteJardin> recetteJardin,
			String methode) {
		super();
		this.id = id;
		this.nom = nom;
//		this.ingredientsNonVegetaux = ingredientsNonVegetaux;
		this.recetteJardin = recetteJardin;
		this.methode = methode;
	}
	public List<RecetteJardin> getRecetteJardin() {
		return recetteJardin;
	}
	public void setRecetteJardin(List<RecetteJardin> recetteJardin) {
		this.recetteJardin = recetteJardin;
	}
	public String getMethode() {
		return methode;
	}
	public void setMethode(String methode) {
		this.methode = methode;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
//	public List<String> getIngredientsNonVegetaux() {
//		return ingredientsNonVegetaux;
//	}
//	public void setIngredientsNonVegetaux(List<String> ingredientsNonVegetaux) {
//		this.ingredientsNonVegetaux = ingredientsNonVegetaux;
//	}
}
