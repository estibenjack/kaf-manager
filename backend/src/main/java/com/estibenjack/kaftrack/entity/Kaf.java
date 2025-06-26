package com.estibenjack.kaftrack.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name="kafs")
public class Kaf {

    @Id
    private String id;

    private LocalDate dateAssigned;
    private String articleTitle;
    private String url;
    private String requests;
    private String status;


    // no args constructor
    public Kaf(){}

    // all args constructor
    public Kaf(String id, LocalDate dateAssigned, String articleTitle, String url, String requests, String status) {
        this.id = id;
        this.dateAssigned = dateAssigned;
        this.articleTitle = articleTitle;
        this.url = url;
        this.requests = requests;
        this.status = status;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public LocalDate getDateAssigned() {
        return dateAssigned;
    }

    public void setDateAssigned(LocalDate dateAssigned) {
        this.dateAssigned = dateAssigned;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getRequests() {
        return requests;
    }

    public void setRequests(String requests) {
        this.requests = requests;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

}
