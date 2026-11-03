package com.mobileapp.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Column;
import jakarta.persistence.GenerationType;
import java.time.LocalDate;
import jakarta.persistence.Table;
import java.math.BigDecimal;

@Entity 
@Table(name = "order_items")
public class OrderItem {
    
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderItemid;

    @ManyToOne 
    @JoinColumn (name = "order_id")
    private Order order;

    @ManyToOne 
    @JoinColumn (name = "item_id")
    private Item item;

    @Column(nullable = false)
    private Integer quantity;

    @Column(nullable = false)
    private BigDecimal priceAtCheckout;

    public Long getOrderItemid() {
        return orderItemid;
    }

    public void setOrderItemid(Long orderItemid) {
        this.orderItemid = orderItemid;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPriceAtCheckout() {
        return priceAtCheckout;
    }

    public void setPriceAtCheckout(BigDecimal priceAtCheckout) {
        this.priceAtCheckout = priceAtCheckout;
    }
}
