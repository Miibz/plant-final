package sopra.formation.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
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
	@JsonView({Views.ViewCommon.class, Views.ViewRecetteByNom.class})
	private String nom;
	@JsonView(Views.ViewCommon.class)
	private String info;
	@JsonView(Views.ViewCommon.class)
	@Lob
	@Column(columnDefinition="LONGTEXT")
	private String ingredients;
	@Lob
	@Column(columnDefinition="LONGTEXT")
	@JsonView(Views.ViewCommon.class)
	private String  methode;
//	private List<String> ingredientsNonVegetaux;
//	@OneToMany(mappedBy="recette")
//	@JsonView(Views.ViewRecette.class)
//	private List<RecetteJardin> recetteJardin;
	
	
	public Recette() {
		super();
	}

	public Recette(Long id, String nom, String info, String ingredients, String methode) {
		super();
		this.id = id;
		this.nom = nom;
		this.info = info;
		this.ingredients = ingredients;
		this.methode = methode;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getVersion() {
		return version;
	}

	public void setVersion(int version) {
		this.version = version;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public String getIngredients() {
		return ingredients;
	}

	public void setIngredients(String ingredients) {
		this.ingredients = ingredients;
	}

	public String getMethode() {
		return methode;
	}

	public void setMethode(String methode) {
		this.methode = methode;
	}
	
//	public List<String> getIngredientsNonVegetaux() {
//		return ingredientsNonVegetaux;
//	}
//	public void setIngredientsNonVegetaux(List<String> ingredientsNonVegetaux) {
//		this.ingredientsNonVegetaux = ingredientsNonVegetaux;
//	}
}
