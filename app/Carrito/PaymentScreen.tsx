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
    router.push("/success"); // Ir a pantalla de éxito
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DATOS DE LA TARJETA</Text>
      
      <View style={styles.cardIcons}>
        <Image source={visaIcon} style={styles.icon} />
        <Image source={mastercardIcon} style={styles.icon} />
      </View>

      <Controller
        control={control}
        rules={{ required: "Número de tarjeta requerido", minLength: 16, maxLength: 16 }}
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

      <View style={styles.row}>
        <Controller
          control={control}
          rules={{ required: "Caducidad requerida" }}
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
          rules={{ required: "CVV requerido", minLength: 3, maxLength: 4 }}
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
      {errors.expiry && <Text style={styles.errorText}>{errors.expiry.message}</Text>}
      {errors.cvv && <Text style={styles.errorText}>{errors.cvv.message}</Text>}

      <Text style={styles.label}>¿Quieres guardar este método de pago?</Text>
      <View style={styles.radioGroup}>
        <TouchableOpacity style={styles.radioButton}>
          <Text style={styles.radioText}>✔️ Sí</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.radioButton}>
          <Text style={styles.radioText}>⭕ No</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.payButton} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.payButtonText}>Realizar Compra</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#000",
  },
  cardIcons: {
    flexDirection: "row",
    marginBottom: 15,
  },
  icon: {
    width: 50,
    height: 30,
    marginHorizontal: 5,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    marginBottom: 10,
  },
  inputSmall: {
    width: "48%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 5,
    marginBottom: 10,
  },
  inputError: {
    borderColor: "red",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#000",
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
    color: "#000",
  },
  payButton: {
    backgroundColor: "blue",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
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
    fontSize: 12,
    alignSelf: "flex-start",
  },
});

export default PaymentScreen;
