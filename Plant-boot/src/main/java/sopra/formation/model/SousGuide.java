package sopra.formation.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Version;

import com.fasterxml.jackson.annotation.JsonView;

@Entity
public class SousGuide {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@JsonView(Views.ViewCommon.class)
	private Long id;
	@Version
	@JsonView(Views.ViewCommon.class)
	private int version;
	@ManyToOne
	@JoinColumn(name="notice_id")
	@JsonView(Views.ViewSousGuide.class)
	private Notice notice;
	@ManyToOne
	@JoinColumn(name="guideUtilisation_id")
	@JsonView(Views.ViewSousGuide.class)
	private GuideUtilisation guideUtilisation;
	
	public SousGuide() {
		super();
	}
	public SousGuide(Long id, int version, Notice notice, GuideUtilisation guideUtilisation) {
		super();
		this.id = id;
		this.version = version;
		this.notice = notice;
		this.guideUtilisation = guideUtilisation;
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
	public Notice getNotice() {
		return notice;
	}
	public void setNotice(Notice notice) {
		this.notice = notice;
	}
	public GuideUtilisation getGuideUtilisation() {
		return guideUtilisation;
	}
	public void setGuideUtilisation(GuideUtilisation guideUtilisation) {
		this.guideUtilisation = guideUtilisation;
	}
	
}
