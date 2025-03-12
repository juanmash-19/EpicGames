import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import visaIcon from "../../assets/visa.jpg";
import mastercardIcon from "../../assets/mastercard.png";

const PaymentScreen = () => {
  const router = useRouter();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Datos de pago:", data);
    router.push("/success"); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DATOS DE LA TARJETA</Text>
      
      <View style={styles.cardIcons}>
        <Image source={visaIcon} style={styles.icon} />
        <Image source={mastercardIcon} style={styles.icon} />
      </View>

      {/* Número de Tarjeta */}
      <Controller
        control={control}
        rules={{ 
          required: "Número de tarjeta requerido", 
          minLength: { value: 16, message: "Debe tener 16 dígitos" },
          maxLength: { value: 16, message: "Debe tener 16 dígitos" }
        }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={[styles.input, errors.cardNumber && styles.inputError]}
            placeholder="Número de Tarjeta *"
            keyboardType="numeric"
            maxLength={16}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="cardNumber"
      />
      {errors.cardNumber && <Text style={styles.errorText}>{errors.cardNumber.message}</Text>}

      {/* Expiración y CVV */}
      <View style={styles.row}>
        <Controller
          control={control}
          rules={{ 
            required: "Fecha de expiración requerida", 
            pattern: { value: /^(0[1-9]|1[0-2])\/\d{2}$/, message: "Formato MM/YY" }
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.inputSmall, errors.expiry && styles.inputError]}
              placeholder="MM/YY *"
              keyboardType="numeric"
              maxLength={5}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="expiry"
        />

        <Controller
          control={control}
          rules={{ 
            required: "CVV requerido", 
            minLength: { value: 3, message: "Mínimo 3 dígitos" }, 
            maxLength: { value: 4, message: "Máximo 4 dígitos" }
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[styles.inputSmall, errors.cvv && styles.inputError]}
              placeholder="CVV *"
              keyboardType="numeric"
              maxLength={4}
              secureTextEntry
              onChangeText={onChange}
              value={value}
            />
          )}
          name="cvv"
        />
      </View>
      {errors.expiry?.message && <Text style={styles.errorText}>{errors.expiry.message}</Text>}
      {errors.cvv?.message && <Text style={styles.errorText}>{errors.cvv.message}</Text>}

      {/* Guardar Método de Pago */}
      <Text style={styles.label}>¿Quieres guardar este método de pago?</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity style={styles.radioButton}>
          <Text style={styles.radioText}>✔️ Sí</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioButton}>
          <Text style={styles.radioText}>⭕ No</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de Pago */}
      <TouchableOpacity style={styles.payButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.payButtonText}>Realizar Compra</Text>
      </TouchableOpacity>

      {/* Botón de Cancelar */}
      <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#fff",
  },
  cardIcons: {
    flexDirection: "row",
    marginBottom: 15,
  },
  icon: {
    width: 60,
    height: 40,
    marginHorizontal: 10,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
    color: "#000",
  },
  inputSmall: {
    width: "48%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#fff",
    color: "#000",
  },
  inputError: {
    borderColor: "red",
    backgroundColor: "#ffebee",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#fff",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginBottom: 20,
  },
  radioButton: {
    padding: 8,
  },
  radioText: {
    fontSize: 16,
    color: "#fff",
  },
  payButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  payButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  cancelButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    alignSelf: "flex-start",
  },
});

export default PaymentScreen;
