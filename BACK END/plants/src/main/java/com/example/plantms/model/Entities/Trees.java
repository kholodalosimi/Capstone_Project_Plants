
package com.example.plantms.model.Entities;



import javax.persistence.*;




@Entity
@Table
public class Trees {




    @Id
    @Column(name = "treesId")
    private int treesId;
    private String location;
    private String plantingtime;




//    2>>>1
    @ManyToOne
    @JoinColumn(name = "usres_id" , referencedColumnName = "id")
    private Users users;



//    3>>>2
    @ManyToOne
    @JoinColumn(name = "treetype_id" , referencedColumnName = "treetypeId")
    private Treetype treetype;




    public Trees() {
    }



    public Trees(int treesId, String location, String plantingtime, Users users , Treetype treetype ) {
        this.treesId = treesId;
        this.location = location;
        this.plantingtime = plantingtime;
        this.users = users;
        this.treetype = treetype;
    }



    public int getTreesId() {
        return treesId;
    }



    public void setTreesId(int treesId) {
        this.treesId = treesId;
    }



    public String getLocation() {
        return location;
    }




    public void setLocation(String location) {
        this.location = location;
    }



    public String getPlantingtime() {
        return plantingtime;
    }



    public void setPlantingtime(String plantingtime) {
        this.plantingtime = plantingtime;
    }


    public Users getUsers() {
        return users;
    }



    public void setUsers(Users users) {
        this.users = users;
    }

    public Treetype getTreetype() {
        return treetype;
    }

    public void setTreetype(Treetype treetype) {
        this.treetype = treetype;
    }
}

