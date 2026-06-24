package com.mybanking.payments;

import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @GetMapping("/health")
    public String health() {
        return "Payments Service Healthy";
    }

    @PostMapping
    public Map<String, String> createPayment() {
        return Map.of(
                "status", "SUCCESS",
                "message", "Payment Created"
        );
    }
}