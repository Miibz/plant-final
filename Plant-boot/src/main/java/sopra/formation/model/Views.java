package sopra.formation.model;

public class Views {
	
	public static class ViewCommon {}
	public static class ViewPersonne extends ViewCommon {}
	public static class ViewRecette extends ViewCommon {}
	public static class ViewDevis extends ViewCommon {}
	public static class ViewJardin extends ViewCommon {}
	public static class ViewFacture extends ViewCommon {}
	public static class ViewVegetal extends ViewCommon {}
	public static class ViewAdresse extends ViewCommon {}
	public static class ViewCommande extends ViewCommon {}
	public static class ViewGuideUtilisation extends ViewCommon {}
	public static class ViewAdmin extends ViewPersonne {}
	public static class ViewUtilisateur extends ViewPersonne {}
	public static class ViewCommentaire extends ViewCommon {}
	public static class ViewRecherche extends ViewCommon {}
	public static class ViewArticle extends ViewCommon {}
	public static class ViewSousGuide extends ViewCommon {}
	public static class ViewDejaPlante extends ViewCommon {}
	public static class ViewNotice extends ViewCommon {}
	public static class ViewRecetteJardin extends ViewCommon {}
	public static class ViewMeteo extends ViewCommon {}
	public static class ViewVegetalWithNom extends ViewVegetal {}
	public static class ViewConnexion extends ViewCommon {}
	public static class ViewGuideByNom extends ViewGuideUtilisation {}
	public static class ViewRecetteByNom extends ViewRecette {}
	public static class ViewVegetal1 extends ViewCommon {}
	public static class ViewVegetal2 extends ViewVegetal {}
	public static class ViewAffinite extends ViewCommon {}
}