import 'package:flutter_bloc/flutter_bloc.dart';

// Eventos
enum CounterEvent { increment }

// Estado
class CounterState {
  final int count;
  CounterState(this.count);
}

class CounterBloc extends Bloc<CounterEvent, CounterState> {
  CounterBloc() : super(CounterState(0));

  @override
  Stream<CounterState> mapEventToState(CounterEvent event) async* {
    if (event == CounterEvent.increment) {
      yield CounterState(state.count + 1);
    }
  }
}
