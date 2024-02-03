package com.jobvista.entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "hsc_edu_dtls")
public class HscEduDtl {
    @Id
    @NotNull
    @OneToOne(fetch = FetchType.LAZY, optional = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private JobSeekerDtl js;

    @Size(max = 100)
    @NotNull
    @Column(name = "hsc_school_name", nullable = false, length = 100)
    private String hscSchoolName;

    @Size(max = 100)
    @NotNull
    @Column(name = "hsc_board_name", nullable = false, length = 100)
    private String hscBoardName;

    @Size(max = 100)
    @NotNull
    @Column(name = "hsc_stream", nullable = false, length = 100)
    private String hscStream;

    @NotNull
    @Column(name = "hsc_passing_year", nullable = false)
    private Integer hscPassingYear;

    @NotNull
    @Column(name = "hsc_percentage", nullable = false)
    private Double hscPercentage;

    @NotNull
    @Column(name = "hsc_creation_date", nullable = false)
    private Instant hscCreationDate;

}